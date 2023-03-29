"use client";
import { useChat, useToggle } from "@/Hooks";
import { AiTwotoneDelete } from "react-icons/ai";

const NavCollapseDeleteBtn = () => {
  const { chat } = useChat();
  const { handleAlert } = useToggle();
  return (
    <>
      {chat.length > 1 ? (
        <button
          onClick={handleAlert}
          className="flex items-center justify-start w-40 h-12 row-span-2 gap-2 p-2 duration-500 bg-red-400 rounded-lg text-slate-50 hover:bg-red-500 active:bg-red-900"
        >
          <AiTwotoneDelete />
          <h3>Eliminar historial</h3>
        </button>
      ) : null}
    </>
  );
};

export default NavCollapseDeleteBtn;
