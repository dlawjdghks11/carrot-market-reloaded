import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

const SocialLogin = () => {
  return (
    <div>
      <button className="primary-btn flex justify-center items-center gap-1">
        <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
        <div>Sign up with SMS</div>
      </button>
    </div>
  );
};

export default SocialLogin;
