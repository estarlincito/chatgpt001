import React, { useContext, useState } from "react";
import Footer from "./Footer";
import { AiOutlineCheckCircle, AiTwotoneDelete } from "react-icons/ai";
import AppContext from "@/src/context/AppContext";
import { currentTimer } from "@/src/utils/currentTimer";

const Collapse = () => {
  const { chats, setChats } = useContext(AppContext);
  const [alert, setAlert] = useState(false);

  const handleClick = () => {
    const initialValue = [
      {
        id: 0,
        bot: {
          date: currentTimer(),
          answer: `Hola, soy la hija de <b>Estarlincito</b>, ¿en qué puedo ayudarte?`,
        },
      },
    ];

    setChats(initialValue);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <div className="grid grid-rows-4 h-96 w-4/5 mt-4 p-4 absolute  bg-primary left-0 rounded-br-lg">
      <p className="row-span-2">
        CHATGPT001 es un motor de conversación en línea basado en machine
        learning para que los usuarios puedan tener interacciones realistas y
        naturales con un bot.
      </p>

      <div className="row-span-2 border-solid border-t pt-5 border-t-secondary rounded-b-lg">
        {chats.length > 1 ? (
          <button
            onClick={handleClick}
            className="row-span-2 bg-red-400 h-12 w-40 p-2 rounded-lg text-slate-50 flex justify-start items-center gap-2 hover:bg-red-500 active:bg-red-900 duration-500"
          >
            <AiTwotoneDelete />
            <h3>Eliminar historial</h3>
          </button>
        ) : null}

        {alert === true ? (
          <div className="text-center p-5 rounded-lg">
            <p className="duration-500 text-lg">Historial eliminado</p>
            <i className="flex justify-center text-3xl">
              <AiOutlineCheckCircle />
            </i>
          </div>
        ) : null}
      </div>

      <div className="row-span-1">
        <Footer />
      </div>
    </div>
  );
};

export default Collapse;
