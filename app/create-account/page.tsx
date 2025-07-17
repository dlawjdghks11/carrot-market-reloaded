import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

const CreateAccount = () => {
  return (
    <div className="relative max-w-lg h-screen ml-auto mr-auto bg-neutral-900 *:text-white px-5 pt-10">
      <h1 className="mb-1">안녕하세요!</h1>
      <div className="mb-7">Fill in the form below to join!</div>
      <input
        className="border-gray-100 w-full h-8 ring-1 focus:ring-2 ring-neutral-200 
        focus:ring-orange-500 transition-colors rounded-md pl-3 mb-2 focus:outline-none"
        placeholder="Username"
      />
      <div className="!text-red-500 mb-2 hidden">Input error</div>
      <button className="primary-btn py-1.5">Create account</button>
      <div className="border-b-[1px] border-gray-50 w-full my-4"></div>
      <button className="primary-btn flex justify-center items-center gap-1 py-1.5">
        <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
        <div>Sign up with SMS</div>
      </button>
    </div>
  );
};

export default CreateAccount;
