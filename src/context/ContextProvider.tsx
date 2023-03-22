"use client";
import { useEffect, useRef, useState } from "react";
import { Chats } from "@/types";
import { initialValue } from "@/utils";
import AppContext from "./AppContext";

type props = {
  children: JSX.Element | JSX.Element[];
};

const ContextProvider = ({ children }: props) => {
  const [chats, setChats] = useState<Chats[]>([]);
  const [menu, setMenu] = useState(false);
  const appRender = useRef(0);

  //off menu
  const handleFalse = () => {
    menu === true ? setMenu(false) : null;
  };

  //if chats change, save to local storage
  useEffect(() => {
    if (appRender.current === 0) {
      appRender.current += 1;
      return;
    }
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  //whent app start
  useEffect(() => {
    const lsChats = localStorage.getItem("chats");

    if (lsChats === null) {
      setChats(initialValue);
    } else {
      setChats(JSON.parse(lsChats));
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        chats,
        setChats,
        menu,
        setMenu,
        handleFalse,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
