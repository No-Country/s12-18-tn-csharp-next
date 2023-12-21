import { z } from "zod";

export const complaintSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().min(10).max(500),
  media: z.array(z.string()), 
});