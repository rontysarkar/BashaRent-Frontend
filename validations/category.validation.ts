import {z} from 'zod'

export const createCategorySchema = z.object({
  name: z.string().min(1, "Category Name can not be empty"),
})

export type TCreateCategory = z.infer<typeof createCategorySchema>