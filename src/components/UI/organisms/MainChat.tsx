"use client";
import { useAppContext } from "@/context";
import { ChatCard, ChatCardLoadding } from "@UI/molecules";
import { useEffect, useRef } from "react";

const MainChat = () => {
  const { chats, collapse, handleFalse } = useAppContext();
  const devRef = useRef<HTMLDivElement>(null);
  console.log(collapse);

  //to scroll down
  useEffect(() => {
    devRef.current?.scrollTo({
      top: devRef.current?.scrollHeight,
      behavior: "smooth",
    });
  }, [chats]);

  return (
    <div
      onClick={handleFalse}
      ref={devRef}
      className="bg-primary p-5 h-[82%] overflow-auto"
    >
      ${collapse === true ? <div>test</div> : ""}`
      {chats.map((chat) => (
        <div key={chat.id} className="grid items-center">
          {chat.human === undefined ? null : (
            <ChatCard
              type="human"
              header={chat.human.question}
              date={chat.human.date}
            />
          )}

          {chat.bot === undefined ? (
            <ChatCardLoadding />
          ) : (
            <ChatCard
              type="bot"
              header={chat.bot.answer}
              date={chat.bot.date}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MainChat;
