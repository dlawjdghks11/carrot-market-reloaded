"use server";

export const handleForm = async (prevState: unknown, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    error: ["Wrong Password"],
    fieldValues: {
      email,
      password,
    },
  };
};
