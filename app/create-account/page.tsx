"use client";

import FormInput from "@/components/form-input";
import FormBtn from "@/components/form-btn";
import SocialLogin from "@/components/social-login";
import { useActionState } from "react";
import { handleForm } from "./actions";

const CreateAccount = () => {
  const [state, action] = useActionState(handleForm, null);
  return (
    <div className="relative max-w-lg h-screen ml-auto mr-auto bg-neutral-900 *:text-white px-5 pt-10">
      <h1 className="mb-1">안녕하세요!</h1>
      <div className="mb-7">Fill in the form below to join!</div>
      <form action={action} className="flex flex-col gap-1 mb-2">
        <FormInput
          type="text"
          name="text"
          placeholder="Username"
          required
          errorMessage={["Input error"]}
          defaultValue={(state?.fieldValues.username as string) ?? ""}
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          required
          errorMessage={["Invalid Email"]}
          defaultValue={(state?.fieldValues.email as string) ?? ""}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          required
          errorMessage={["Invalid Password"]}
          defaultValue={(state?.fieldValues.password as string) ?? ""}
        />
        <FormInput
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
          required
          errorMessage={["Not Match"]}
          defaultValue={(state?.fieldValues.confirmPassword as string) ?? ""}
        />
        <FormBtn text="Create account" className={"mt-2"} />
      </form>
      <div className="border-b-[1px] border-gray-300 w-full my-4"></div>
      <SocialLogin />
    </div>
  );
};

export default CreateAccount;
