import { useEffect, useRef, useState } from "react";
import { chatsTp } from "../types/contextTp";
import { currentTimer } from "../utils/currentTimer";
import AppContext from "./AppContext";

type props = {
  children: JSX.Element | JSX.Element[];
};

const ContextProvider = ({ children }: props) => {
  const [chats, setChats] = useState<chatsTp[]>([]);
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
    const initialValue = [
      {
        id: 0,
        bot: {
          date: currentTimer(),
          answer: `Hola, soy la hija de <b>Estarlincito</b>, ¿en qué puedo ayudarte?`,
        },
      },
    ];

    const chatsLs =
      localStorage.getItem("chats") || JSON.stringify(initialValue);
    setChats(JSON.parse(chatsLs));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
