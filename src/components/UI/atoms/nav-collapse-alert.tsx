'use client';
import useToggle from '@/Hooks/use-toggle';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const NavCollapseAlert = () => {
  const { alert } = useToggle();

  return (
    <>
      {alert === true ? (
        <div className='p-5 text-center rounded-lg'>
          <p className='text-lg duration-500'>Historial eliminado</p>
          <i className='flex justify-center text-3xl'>
            <AiOutlineCheckCircle />
          </i>
        </div>
      ) : null}
    </>
  );
};

export default NavCollapseAlert;
