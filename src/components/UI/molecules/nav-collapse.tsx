'use client';
import useToggle from '@/Hooks/use-toggle';
import NavCollapseAlert from '@UI/atoms/nav-collapse-alert';
import NavCollapseDeleteBtn from '@UI/atoms/nav-collapse-delete-btn';
import NavCollapseFooter from '@UI/atoms/nav-collapse-footer';
import NavCollapseHeader from '@UI/atoms/nav-collapse-header';

const NavCollapse = () => {
  const { collapse } = useToggle();

  return (
    <>
      {collapse === true ? (
        <div className='z-40'>
          <div className='absolute left-0 grid w-4/5 grid-flow-row-dense p-4 border-b border-r rounded-br-lg mt-11 h-[50vh] min-h-[200px] bg-primary border-b-tertiary border-r-tertiary border-opacity-30'>
            <NavCollapseHeader />
            <NavCollapseDeleteBtn />
            <NavCollapseAlert />
            <NavCollapseFooter />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavCollapse;
