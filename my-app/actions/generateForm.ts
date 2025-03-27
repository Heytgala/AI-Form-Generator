"use server"

import prisma from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"
import { z } from "zod";
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
import { revalidatePath } from "next/cache";

export const generateForm = async (prevState: unknown, formData: FormData) => {
    try{
        const user= await currentUser();
        if(!user){
            return {success:false, message:"User not found"}
        }

        const schema = z.object({
            description: z.string().min(1, "Description is required")
        });
        const result = schema.safeParse({
            description: formData.get("description") as string
        });

        if (!result.success) {
            return { success: false, message: "Invalid form data", error: result.error.errors }
        }

        const description = result.data.description;

        if (!process.env.OPENAI_API_KEY) {
            return { success: false, message: "OPENAI API Key not found" }
        }

        const prompt = `Generate a JSON response for a form with the following structure. Ensure the keys and format remain constant in every response.
        {
        "formTitle": "string", // The title of the form
        "formFields": [        // An array of fields in the form
            {
            "label": "string", // The label to display for the field
            "name": "string",  // The unique identifier for the field (used for form submissions)
            "placeholder": "string" // The placeholder text for the field
            }
        ]
        }
        Requirements:
        - Use only the given keys: "formTitle", "formFields", "label", "name", "placeholder".
        - Always include at least 3 fields in the "formFields" array.
        - Keep the field names consistent across every generation for reliable rendering.
        - Provide meaningful placeholder text for each field based on its label.
                `;
        
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: `${description} ${prompt}` }],
            model: "gpt-3.5-turbo",
        });

        const formContent = completion.choices[0]?.message.content;
        if (!formContent) {
            return { success: false, message: "Failed to generate form content" }
        }

        let parsedFormContent;
        try {
            parsedFormContent = JSON.parse(formContent);
        } catch (error) {
            console.error("Error parsing formContent JSON:", error);
            return { success: false, message: "Invalid form content structure" };
        }

        console.log("generated form -> ",formContent);

        const form = await prisma.form.create({
            data: {
                ownerId: user.id,
                content: parsedFormContent
            }
        });

        revalidatePath("/dashboard/forms");
        return {
            success:true,
            message:"Form generated successfully!",
            data:form
        }


    }
    catch(error){
        console.log("Error generated form", error);
        return { success: false, message: "An error occurred while generateing the form" }
    }
}