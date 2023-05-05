import { NavMenu } from '@UI/atoms';
import { NavCollapse, NavLogo } from '@UI/molecules';

const Nav = () => {
  return (
    <nav className='relative grid items-center h-16 grid-cols-9 row-start-1 p-4 border-b select-none text-slate-50 border-b-tertiary border-opacity-30'>
      <NavCollapse />
      <NavMenu />
      <NavLogo />
    </nav>
  );
};

export default Nav;
