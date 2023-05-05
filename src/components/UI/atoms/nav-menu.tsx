'use client';
import { useToggle } from '@/Hooks';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavMenu = () => {
  const { collapse, togglrCollapse } = useToggle();

  return (
    <button className='col-start-1' onClick={togglrCollapse}>
      {collapse === false ? (
        <i className='text-lg font-bold duration-500 text-slate-50 hover:text-slate-300 active:text-slate-600'>
          <AiOutlineMenu />
        </i>
      ) : (
        <i className='text-lg font-bold duration-500 text-slate-50 hover:text-slate-300 active:text-slate-600'>
          <AiOutlineClose />
        </i>
      )}
    </button>
  );
};

export default NavMenu;
