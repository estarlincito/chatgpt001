import { createContext } from "react";
import { chatsTp } from "../types/contextTp";

type constextTP = {
  chats: chatsTp[];
  setChats: (chats: chatsTp[]) => void;
};

const AppContext = createContext({} as constextTP);

export default AppContext;
