import NavMenu from '@UI/atoms/nav-menu';
import NavCollapse from '@UI/molecules/nav-collapse';
import NavLogo from '@UI/molecules/nav-logo';

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
