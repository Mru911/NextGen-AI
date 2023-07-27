import * as z from 'zod'
export const formSchema=z.object({
    prompt:z.string().min(1,{
        message:'Video related Prompt is required',
    }),
})
