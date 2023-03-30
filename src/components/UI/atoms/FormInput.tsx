"use client";
import { useForm } from "@/Hooks";

const FormInput = () => {
  const { question, onChange } = useForm();
  return (
    <input
      autoFocus
      required
      maxLength={1000}
      onChange={onChange}
      value={question}
      placeholder="Escribe aquí"
      className="col-span-7 p-3 text-base font-light border-none rounded-bl-lg outline-none bg-primary text-quaternary"
    />
  );
};

export default FormInput;
