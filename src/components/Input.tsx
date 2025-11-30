import React from "react";

interface InputProps {
  type?: string;
  value: string | number;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  name?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onchange,
  label,
  name,
  placeholder,
}) => {
  return (
    <div className="my-2">
      {label && <label className="block font-semibold mb-1">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        className="w-full h-10 border-2 border-gray-500 rounded-sm px-2"
      />
    </div>
  );
};

export default Input;
