interface InputProps {
  type: string;
  required: boolean;
  placeholder: string;
  errorMessage: string[];
  name: string;
  defaultValue?: string;
}

const FormInput = ({
  type,
  required,
  placeholder,
  errorMessage,
  name,
  defaultValue,
}: InputProps) => {
  return (
    <>
      <input
        type={type}
        name={name}
        required={required}
        className="border-gray-100 w-full h-10 ring-1 focus:ring-2 ring-neutral-200 
        focus:ring-orange-500 transition-colors rounded-md pl-3 mb-2 focus:outline-none"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {errorMessage.length > 0
        ? errorMessage.map((message, index) => (
            <div key={index} className="!text-red-500 mb-2">
              {message}
            </div>
          ))
        : null}
    </>
  );
};

export default FormInput;
