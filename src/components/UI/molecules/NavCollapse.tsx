"use client";
import { useToggle } from "@/Hooks";
import {
  NavCollapseAlert,
  NavCollapseDeleteBtn,
  NavCollapseFooter,
  NavCollapseHeader,
} from "@UI/atoms";

const NavCollapse = () => {
  const { collapse } = useToggle();

  return (
    <>
      {collapse === true ? (
        <div className="z-40">
          <div className="absolute left-0 grid w-4/5 grid-flow-row-dense p-4 border-b border-r rounded-br-lg mt-11 h-96 bg-primary border-b-tertiary drop-shadow-md border-r-tertiary border-opacity-30">
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
