import Bot from "./Bot";
import Human from "./Human";
import { useContext, useEffect, useRef } from "react";
import AppContext from "@/src/context/AppContext";
import Loadding from "./Loadding";

const Chat = () => {
  const { chats } = useContext(AppContext);
  const boxRef = useRef<HTMLDivElement>(null);
  const { handleFalse } = useContext(AppContext);

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
      {chats.map((chat) => (
        <div className="grid gap-y-5" key={chat.id}>
          {chat.human === undefined ? null : (
            <Human date={chat.human.date} question={chat.human.question} />
          )}

          {chat.bot === undefined ? (
            <Loadding />
          ) : (
            <Bot date={chat.bot.date} answer={chat.bot.answer} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Chat;
