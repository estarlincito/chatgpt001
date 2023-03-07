import Link from "next/link";
import { useContext } from "react";
import { GiRobotHelmet } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import AppContext from "../../context/AppContext";
import Collapse from "./Collapse";

const Header = () => {
  const { menu, setMenu, handleFalse } = useContext(AppContext);

  const handleClick = () => {
    const statu = menu === false ? true : false;
    setMenu(statu);
  };

  return (
    <div className="relative grid grid-cols-9 items-center p-4 bg-primary text-slate-50 rounded-t-lg select-none">
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

      {menu === true ? (
        <div className="col-start-1 ">
          <Collapse />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
