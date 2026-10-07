import { z } from "zod";

/*Data i am expecting must be an object {} and will follow
the defined rules as per the structure. */
export const signupSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.email(),
  password: z.string().min(6),
});

export type SignupData = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export type LoginData = z.infer<typeof loginSchema>;

export const updateProfileSchema = z.object({
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  profilePic: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  zipCode: z.string().optional(),
  phoneNo: z.string().optional(),
});

export type UpdateProfileData = z.infer<typeof updateProfileSchema>;
