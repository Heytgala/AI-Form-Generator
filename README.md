# AI-Form-Generator
SaaS App

Packages/Libraries:
1) npx create-next-app@latest
2) npx prisma init
3) npx prisma migrate dev --name required model created
4) npx prisma generate
5) npm install @clerk/nextjs
6) npx shadcn@latest init
7) npx shadcn@latest add input label button card
8) npm install next-themes
9) npx shadcn@latest add progress
10) npm i zod openai
11) npx prisma migrate dev --name subscription model created 
12) npx shadcn@latest add sidebar dialog
13) npm i @stripe/stripe-js
14) npm i stripe -g

WebHook Integration:
Developer -> Webhook
1) stripe login
2) stripe listen --forward-to localhost:3000/api/webhook
3) stripe trigger payment_intent.succeeded

Docker Integration:
1) Create Dockerfile
2) Add dockerignore. This works similar to gitignore
3) docker build 
4) docker images
5) docker run -it -p 3000:3000 (image-name)
6) docker ps -a
7) docker push (hub-image-name)