import Link from 'next/link';

const Copyright = () => {
  const date = new Date();
  const currentgeYear = date.getFullYear();
  const buildYear = 2023;
  const ownYears = `${buildYear}-${currentgeYear}`;

  return (
    <p>
      &nbsp; Copyright © {buildYear === currentgeYear ? buildYear : ownYears}
      &nbsp;
    </p>
  );
};

const Author = () => {
  return (
    <Link
      href='https://linktr.ee/estarlincito'
      target='_blank'
      rel='noreferrer'
      className='font-bold duration-500 hover:text-slate-300 active:text-slate-500'
    >
      Estarlincito
    </Link>
  );
};

const NavCollapseFooter = () => {
  return (
    <footer className='flex justify-center text-xs'>
      <Copyright />
      <Author />
    </footer>
  );
};

export default NavCollapseFooter;
