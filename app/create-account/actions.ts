"use server";
import db from "@/lib/script";
import * as z from "zod";

const checkUniqueUserName = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });
  return !user;
};

const checkUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return !user;
};

const formSchema = z.object({
  username: z.coerce
    .string()
    .min(3)
    .refine(checkUniqueUserName, "This username is already exist!"),
  email: z.email().refine(checkUniqueEmail, "This email is already exist!"),
  password: z.string().min(10),
  confirmPassword: z.string().min(10),
});

export const createAccount = async (prevState: unknown, formData: FormData) => {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirm_password"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return { error: result.error, fieldValues: data };
  }

  return {
    error: ["Invalid Input"],
    fieldValues: data,
  };
};
