"use client";
import React, { useState } from "react";
import Author from "./Author";
import { AiOutlineCheckCircle, AiTwotoneDelete } from "react-icons/ai";
import { useAppContext } from "@/app/context";
import { initialValue } from "@/app/utils";

const Collapse = () => {
  const { menu, chats, setChats } = useAppContext();
  const [alert, setAlert] = useState(false);

  const handleClick = () => {
    setChats(initialValue);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <>
      {menu === true ? (
        <div className="col-start-1 z-40">
          <div className="grid grid-rows-4 h-96 w-4/5 mt-4 p-4 absolute  bg-primary left-0 rounded-br-lg">
            <p className="row-span-2">
              CHATGPT001 es un motor de conversación en línea basado en machine
              learning para que los usuarios puedan tener interacciones
              realistas y naturales con un bot.
            </p>

            <div className="row-span-2 border-solid border-t pt-5 border-t-secondary rounded-b-lg">
              {chats.length > 1 ? (
                <button
                  onClick={handleClick}
                  className="row-span-2 duration-500 bg-red-400 h-12 w-40 p-2 rounded-lg text-slate-50 flex justify-start items-center gap-2 hover:bg-red-500 active:bg-red-900"
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
              <Author />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Collapse;
