import { createContext } from "react";
import { Chats } from "@/types";

type Constext = {
  chats: Chats[];
  setChats: (chats: Chats[]) => void;

  question: string;
  setQuestion: (question: string) => void;

  collapse: boolean;
  setCollapse: (collapse: boolean) => void;
  handleFalse: () => void;

  alert: boolean;
  setAlert: (alert: boolean) => void;
};

const AppContext = createContext({} as Constext);

export default AppContext;
