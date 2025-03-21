import React from 'react'
import { Card, CardHeader,CardTitle,CardDescription,CardAction,CardContent,CardFooter } from './ui/card'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { PricingPlan, pricingPlan } from '@/lib/pricingplan'
import { Badge } from './ui/badge'

const Pricing = () => {
  return (
    <div className='grid grid-cols-3 gap-6'>
        {
            pricingPlan.map((plan:PricingPlan, index:number)=>(
                <Card className={`${plan.level === "Enterprise" && "bg-[#1c1c1c] text-white"} w-[350px] flex flex-col justify-between`} key={index}>
                    <CardHeader className='flex flex-row items-center gap-2'>
                        <CardTitle>{plan.level}</CardTitle>
                        {
                            plan.level==="Pro" && <Badge className='rounded-full bg-orange-600 hover:bg-null'>🔥 Popular</Badge>
                        }
                    </CardHeader>
                    <CardContent className='flex-1'>
                        <p className='text-2xl font-bold'>{plan.price}</p>
                        <ul className='mt-4 space-y-2'>
                            {
                                plan.services.map((item:string,index:number)=>(
                                    <li className='flex items-center' key={index}>
                                        <span className='text-green-500 mr-2'>
                                            ✔️
                                        </span>
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button
                            variant={`${
                            plan.level === "Enterprise" ? "default" : "outline"
                            }`}
                            className={`${
                            plan.level === "Enterprise" &&
                            "text-black bg-white hover:bg-null"
                            } w-full`}
                        >
                            Get started with {plan.level}
                        </Button>
                    </CardFooter>
                </Card>
                
                
            ))
        }
    </div>
  )
}

export default Pricing
