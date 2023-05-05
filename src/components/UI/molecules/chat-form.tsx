'use client';
import { useForm, useToggle } from '@/Hooks';
import { FormInput, FormSubmit } from '@UI/atoms';

const Form = () => {
  const { onSubmit } = useForm();
  const { offCollapse } = useToggle();

  return (
    <form
      onClick={offCollapse}
      onSubmit={onSubmit}
      className='grid h-16 grid-cols-8 row-start-6 border-t border-t-tertiary border-opacity-30'
    >
      <FormInput />
      <FormSubmit />
    </form>
  );
};

export default Form;
