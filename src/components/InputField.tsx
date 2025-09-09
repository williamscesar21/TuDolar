import React from "react";
import "./InputField.css";

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  error?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange, placeholder, type="text", error }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`input-field ${error ? "error" : ""}`}
    />
  );
};

export default InputField;
