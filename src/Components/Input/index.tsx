import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  label?: string;
}

export const Input = ({
  placeholder,
  label,
  type,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input placeholder={placeholder} type={type} onChange={onChange} />
    </div>
  );
};
