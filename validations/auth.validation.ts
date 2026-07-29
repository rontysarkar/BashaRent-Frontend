import {z} from "zod";


export const loginSchema = z.object({
    email:z.email("Please Enter a valid email"),
    password:z.string().min(6,"Password must be at least 6 characters"),
})


export type loginInputType = z.infer<typeof loginSchema>;