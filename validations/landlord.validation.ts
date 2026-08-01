import { z } from "zod"

export const createPropertySchema = z.object({
  title: z.string().min(1, "Title cannot be empty"),
  price: z.number().positive("Price must be a positive number"),
  location: z.string().min(1, "Location cannot be empty"),
  status: z.enum(["AVAILABLE", "RENTED"]).optional(),
  amenities: z.string().min(1, "amenities cannot be empty").optional(),
  photo: z.string().min(1, "photo url cannot be empty").optional(),
  description: z.string().min(1, "Description cannot be empty"),
  categoryId: z.string().min(1, "Please Select Category"),
})

export const updatePropertySchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters").optional(),
  price: z.number().positive("Price must be a positive number").optional(),
  location: z.string().min(1, "Location cannot be empty").optional(),
  // status: z.enum(["AVAILABLE", "RENTED"]).optional().optional(),
  amenities: z.string().min(1, "amenities cannot be empty").optional(),
  photo: z.string().min(1, "photo url cannot be empty").optional(),
  description: z.string().min(1, "Description cannot be empty").optional(),
  categoryId: z.string().min(1, "Please Select Category").optional(),
})


export type TCreateProperty = z.infer<typeof createPropertySchema>;
export type TUpdateProperty = z.infer<typeof updatePropertySchema>