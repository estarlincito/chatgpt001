import { createContext } from "react";
import { chatsTp } from "../types/contextTp";

type constextTP = {
  chats: chatsTp[];
  setChats: (chats: chatsTp[]) => void;

  menu: boolean;
  setMenu: (menu: boolean) => void;
  handleFalse: () => void;
};

const AppContext = createContext({} as constextTP);

export default AppContext;
