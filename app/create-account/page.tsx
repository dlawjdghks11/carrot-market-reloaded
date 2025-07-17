import FormInput from "@/components/form-input";
import FormBtn from "@/components/form-btn";
import SocialLogin from "@/components/social-login";

const CreateAccount = () => {
  return (
    <div className="relative max-w-lg h-screen ml-auto mr-auto bg-neutral-900 *:text-white px-5 pt-10">
      <h1 className="mb-1">안녕하세요!</h1>
      <div className="mb-7">Fill in the form below to join!</div>
      <div className="flex flex-col gap-1">
        <FormInput
          type="text"
          name="text"
          placeholder="Username"
          required
          errorMessage={["Input error"]}
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          required
          errorMessage={["Input error"]}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          required
          errorMessage={["Input error"]}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Confirm Password"
          required
          errorMessage={["Input error"]}
        />
      </div>
      <FormBtn text="Create account" />
      <div className="border-b-[1px] border-gray-50 w-full my-4"></div>
      <SocialLogin />
    </div>
  );
};

export default CreateAccount;
