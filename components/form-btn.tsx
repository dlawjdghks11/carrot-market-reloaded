interface FormBtnProps {
  text: string;
}

const FormBtn = ({ text }: FormBtnProps) => {
  return <button className="primary-btn">{text}</button>;
};

export default FormBtn;
