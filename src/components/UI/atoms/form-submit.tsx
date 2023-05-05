'use client';
import { useForm } from '@/Hooks';
import { IoChevronForwardCircleSharp } from 'react-icons/io5';

const FormSubmit = () => {
  const { question } = useForm();
  return (
    <>
      {question === '' ? (
        <span className='select-none' />
      ) : (
        <button className='col-span-1 ml-2 text-xl font-bold border-none cursor-pointer select-none text-quinary'>
          <IoChevronForwardCircleSharp />
        </button>
      )}
    </>
  );
};

export default FormSubmit;
