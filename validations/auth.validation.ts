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

export const updateProfileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  bio:z.string().min(1,"Bio cannot be empty").optional(),
  profilePhoto:z.string().optional()
});


export type TLoginInput = z.infer<typeof loginSchema>;
export type TRegisterInput = z.infer<typeof registerSchema>
export type TUpdateProfile = z.infer<typeof updateProfileSchema>