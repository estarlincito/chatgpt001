import { useAppContext } from "@/context";
import { initialValue } from "@/utils";
import { AiTwotoneDelete } from "react-icons/ai";

const NavCollapseDeleteBtn = () => {
  const { chats, setChats, setAlert } = useAppContext();

  const handleClick = () => {
    setChats(initialValue);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <>
      {chats.length > 1 ? (
        <button
          onClick={handleClick}
          className="row-span-2 duration-500 bg-red-400 h-12 w-40 p-2 rounded-lg text-slate-50 flex justify-start items-center gap-2 hover:bg-red-500 active:bg-red-900"
        >
          <AiTwotoneDelete />
          <h3>Eliminar historial</h3>
        </button>
      ) : null}
    </>
  );
};

export default NavCollapseDeleteBtn;
