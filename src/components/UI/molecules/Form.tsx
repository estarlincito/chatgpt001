"use client";
import { FormInput, FormSubmit } from "@UI/atoms";
import { useForm, useToggle } from "@/Hooks";

const Form = () => {
  const { onSubmit } = useForm();
  const { offCollapse } = useToggle();

  return (
    <form
      onClick={offCollapse}
      onSubmit={onSubmit}
      className="grid h-16 grid-cols-8 border-t border-t-tertiary border-opacity-30"
    >
      <FormInput />
      <FormSubmit />
    </form>
  );
};

export default Form;
