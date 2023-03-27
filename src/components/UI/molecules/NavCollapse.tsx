"use client";
import { useAppContext } from "@/context";
import {
  NavCollapseAlert,
  NavCollapseDeleteBtn,
  NavCollapseFooter,
  NavCollapseHeader,
} from "@UI/atoms";

const NavCollapse = () => {
  const { collapse } = useAppContext();

  return (
    <>
      {collapse === true ? (
        <div className="z-40">
          <div className="grid grid-flow-row-dense h-96 w-4/5 mt-10 p-4 absolute  bg-primary left-0 rounded-br-lg">
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
