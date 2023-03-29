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
          <div className="absolute left-0 grid w-4/5 grid-flow-row-dense p-4 mt-10 rounded-br-lg h-96 bg-primary">
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
