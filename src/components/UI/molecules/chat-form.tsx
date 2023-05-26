'use client';
import useForm from '@/Hooks/use-form';
import useToggle from '@/Hooks/use-toggle';
import FormInput from '@UI/atoms/form-input';
import FormSubmit from '@UI/atoms/form-submit';

const ChatForm = () => {
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

export default ChatForm;
