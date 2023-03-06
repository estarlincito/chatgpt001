import Bot from "./Bot";
import Human from "./Human";
import { useContext, useEffect, useRef } from "react";
import AppContext from "@/src/context/AppContext";
import currentTimer from "../utils/currentTimer";
import Loadding from "./Loadding";

const Chat = () => {
  const { chats } = useContext(AppContext);
  const boxRef = useRef<HTMLDivElement>(null);
  const { handleFalse } = useContext(AppContext);

  const initChat = {
    date: currentTimer(),
    answer: `Hola, soy la hija de <b>Estarlincito</b>, ¿en qué puedo ayudarte?`,
  };

  //to scroll down
  useEffect(() => {
    boxRef.current?.scrollTo({
      top: boxRef.current?.scrollHeight,
      behavior: "smooth",
    });
  }, [chats]);

  return (
    <div
      onClick={handleFalse}
      ref={boxRef}
      className="bg-slate-50 h-4/5 p-5 grid items-center gap-y-5 overflow-auto"
    >
      {chats.length === 0 ? (
        <div className="grid gap-y-5">
          <Bot date={initChat.date} answer={initChat.answer} />
        </div>
      ) : (
        <>
          {chats.map((chat) => (
            <div className="grid gap-y-5" key={chat.id}>
              <Human date={chat.human.date} question={chat.human.question} />

              {chat.bot === undefined ? (
                <Loadding />
              ) : (
                <Bot date={chat.bot.date} answer={chat.bot.answer} />
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Chat;
