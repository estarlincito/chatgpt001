"use client";
import { useAppContext } from "@/context";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GiRobotHelmet } from "react-icons/gi";

const MenuAction = () => {
  const { menu, setMenu, handleFalse } = useAppContext();
  const handleClick = () => {
    const statu = menu === false ? true : false;
    setMenu(statu);
  };

  return (
    <>
      <button className="col-start-1" onClick={handleClick}>
        {menu === false ? (
          <i className="text-slate-50 duration-500 text-lg font-bold hover:text-slate-300 active:text-slate-600">
            <AiOutlineMenu />
          </i>
        ) : (
          <i className="text-slate-50 duration-500 text-lg font-bold hover:text-slate-300 active:text-slate-600">
            <AiOutlineClose />
          </i>
        )}
      </button>

      <div className="col-start-4 grid grid-cols-2 items-center">
        <Link href="/" onClick={handleFalse}>
          <GiRobotHelmet />
        </Link>

        <Link href="/" onClick={handleFalse}>
          <h4>CHATGPT001</h4>
        </Link>
      </div>
    </>
  );
};

export default MenuAction;
