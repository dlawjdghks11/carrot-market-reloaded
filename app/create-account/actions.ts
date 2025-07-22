"use server";

export const handleForm = async (prevState: unknown, formData: FormData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    error: ["Wrong Password"],
    fieldValues: {
      username,
      email,
      password,
      confirmPassword,
    },
  };
};
