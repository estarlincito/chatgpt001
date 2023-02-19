import { useState } from "react";
import { chatsTp } from "../types/contextTp";
import AppContext from "./AppContext";

type props = {
  children: JSX.Element | JSX.Element[];
};

const ContextProvider = ({ children }: props) => {
  const [chats, setChats] = useState<chatsTp[]>([]);

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
