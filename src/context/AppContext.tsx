import { createContext } from "react";
import { Chats } from "@/types";

type Constext = {
  chats: Chats[];
  setChats: (chats: Chats[]) => void;

  collapse: boolean;
  setCollapse: (collapse: boolean) => void;
  handleFalse: () => void;
};

const AppContext = createContext({} as Constext);

export default AppContext;
