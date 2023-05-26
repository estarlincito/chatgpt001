import NavIcon from '@UI/atoms/nav-icon';
import NavName from '@UI/atoms/nav-name';
import Link from 'next/link';

const NavLogo = () => {
  return (
    <Link href='/' className='grid items-center grid-cols-2 col-start-4'>
      <NavIcon />
      <NavName />
    </Link>
  );
};

export default NavLogo;
