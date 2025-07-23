"use server";
import bcrypt from "bcrypt";
import db from "@/lib/script";
import { z } from "zod";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

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
  email: z
    .email()
    .toLowerCase()
    .refine(checkUniqueEmail, "An account with this email does not exist."),
  password: z.string({
    error: "Password is required",
  }),
});

export const logIn = async (prevState: unknown, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const result = await formSchema.spa(data);
  if (!result.success) {
    return { error: result.error, fieldValues: data };
  } else {
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });
    const ok = await bcrypt.compare(
      result.data.password,
      user!.password ?? "xxxx"
    );
    if (ok) {
      const session = await getSession();
      session.id = user!.id;
      await session.save();
      redirect("/profile");
    } else {
      return {
        fieldErrors: {
          password: ["Wrong password."],
          email: [],
        },
        fieldValues: data,
      };
    }
  }
};
