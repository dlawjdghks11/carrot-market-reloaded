interface InputProps {
  type: string;
  required: boolean;
  placeholder: string;
  errorMessage: string[];
  name: string;
}

const FormInput = ({
  type,
  required,
  placeholder,
  errorMessage,
  name,
}: InputProps) => {
  return (
    <>
      <input
        type={type}
        name={name}
        required={required}
        className="border-gray-100 w-full h-8 ring-1 focus:ring-2 ring-neutral-200 
        focus:ring-orange-500 transition-colors rounded-md pl-3 mb-2 focus:outline-none"
        placeholder={placeholder}
      />
      {errorMessage.map((message, index) => {
        <div key={index} className="!text-red-500 mb-2 hidden">
          {message}
        </div>;
      })}
    </>
  );
};

export default FormInput;
