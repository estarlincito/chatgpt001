import { FieldValues } from "react-hook-form";
const FormInput = ({ register }: FieldValues) => {
  return (
    <input
      autoFocus
      required
      placeholder="Escribe aquí"
      className="bg-primary text-quaternary font-light border-none outline-none py-3 pl-5 pr-6 rounded-bl-lg text-base col-span-7"
      {...register("question", { required: true, maxLength: 1000 })}
    />
  );
};

export default FormInput;
