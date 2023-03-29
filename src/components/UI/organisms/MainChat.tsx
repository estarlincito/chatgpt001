"use client";
import { ChatCard, ChatCardLoadding } from "@UI/molecules";
import { useEffect, useRef } from "react";
import { useChat } from "@/Hooks";
import { Chat } from "@/types";
import { Opacity } from "@UI/atoms";

const MainChat = () => {
  const devRef = useRef<HTMLDivElement>(null);
  const { chat } = useChat();

  //to scroll down
  useEffect(() => {
    devRef.current?.scrollTo({
      top: devRef.current?.scrollHeight,
      behavior: "smooth",
    });
  }, [chat]);

  return (
    <div ref={devRef} className="p-5 overflow-scroll">
      <Opacity />
      {chat.map((_chat: Chat) => (
        <div key={_chat.id} className="grid items-center">
          {_chat.human === undefined ? null : (
            <ChatCard
              type="human"
              header={_chat.human.question}
              date={_chat.human.date}
            />
          )}

          {_chat.bot === undefined ? (
            <ChatCardLoadding />
          ) : (
            <ChatCard
              type="bot"
              header={_chat.bot.answer}
              date={_chat.bot.date}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MainChat;
