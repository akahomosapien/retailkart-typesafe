import { z } from "zod";

/*Data i am expecting must be an object {} and will follow
the defined rules as per the structure. */
export const signupSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.email(),
  password: z.string().min(6),
});

