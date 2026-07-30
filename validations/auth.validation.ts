import {z} from "zod";


export const loginSchema = z.object({
    email:z.email("Please Enter a valid email"),
    password:z.string().min(6,"Password must be at least 6 characters"),
})

export const registerSchema = z.object({
    name:z.string().min(1,"Name cannot be empty"),
    email:z.email("Please Enter a valid email"),
    role:z.enum(["TENANT","LANDLORD"],{error:"role must be either TENANT or LANDLORD"}),
    password:z.string().min(6,"Password must be at least 6 characters")
})


export type loginInputType = z.infer<typeof loginSchema>;
export type registerInputType = z.infer<typeof registerSchema>