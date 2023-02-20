import { useEffect, useRef, useState } from "react";
import { chatsTp } from "../types/contextTp";
import AppContext from "./AppContext";

type props = {
  children: JSX.Element | JSX.Element[];
};

const ContextProvider = ({ children }: props) => {
  const [chats, setChats] = useState<chatsTp[]>([]);
  const appRender = useRef(0);

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
    const chatsLs = localStorage.getItem("chats") || JSON.stringify([]);
    setChats(JSON.parse(chatsLs));
  }, []);

  return (
    <AppContext.Provider
      value={{
        chats,
        setChats,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
