"use client";

import { useFormStatus } from "react-dom";

interface FormBtnProps {
  text: string;
  className?: string;
}

const FormBtn = ({ text, className = "" }: FormBtnProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={`primary-btn disabled:bg-gray-500 ${className}`}
    >
      {pending ? "로딩중.." : text}
    </button>
  );
};

export default FormBtn;
