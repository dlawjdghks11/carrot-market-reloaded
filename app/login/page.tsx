"use client";

import FormInput from "@/components/form-input";
import FormBtn from "@/components/form-btn";
import SocialLogin from "@/components/social-login";
import { useActionState } from "react";
import { logIn } from "./actions";

const Login = () => {
  const [state, action] = useActionState(logIn, null);
  return (
    <div className="relative max-w-lg h-screen ml-auto mr-auto bg-neutral-900 *:text-white px-5 pt-10">
      <h1 className="mb-1">안녕하세요!</h1>
      <div className="mb-7">Log in with email and password!</div>
      <form action={action} className="flex flex-col gap-1">
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          required
          defaultValue={(state?.fieldValues.email as string) ?? ""}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <FormBtn text="Log in" className={"mt-2"} />
      </form>
      <div className="border-b-[1px] border-gray-300 w-full my-10"></div>
      <SocialLogin />
    </div>
  );
};

export default Login;
