"use client";
import BotAnswer from "./BotAnswer";
import HumanQuestion from "./HumanQuestion";
import Loadding from "./Loadding";
import { useAppContext } from "@/app/context";

const Content = () => {
  const { chats } = useAppContext();

  return (
    <>
      {chats.map((chat) => (
        <div className="grid gap-y-5" key={chat.id}>
          {chat.human === undefined ? null : (
            <HumanQuestion
              date={chat.human.date}
              question={chat.human.question}
            />
          )}

          {chat.bot === undefined ? (
            <Loadding />
          ) : (
            <BotAnswer date={chat.bot.date} answer={chat.bot.answer} />
          )}
        </div>
      ))}
    </>
  );
};

export default Content;
