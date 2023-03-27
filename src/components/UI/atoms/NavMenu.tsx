"use client";
import { useAppContext } from "@/context";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavMenu = () => {
  const { collapse, setCollapse } = useAppContext();
  const handleClick = () => {
    const statu = collapse === false ? true : false;
    setCollapse(statu);
  };

  return (
    <button className="col-start-1" onClick={handleClick}>
      {collapse === false ? (
        <i className="text-slate-50 duration-500 text-lg font-bold hover:text-slate-300 active:text-slate-600">
          <AiOutlineMenu />
        </i>
      ) : (
        <i className="text-slate-50 duration-500 text-lg font-bold hover:text-slate-300 active:text-slate-600">
          <AiOutlineClose />
        </i>
      )}
    </button>
  );
};

export default NavMenu;
