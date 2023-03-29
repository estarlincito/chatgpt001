"use client";
import clsx from "clsx";
import { ChatCard, ChatCardLoadding } from "@UI/molecules";
import { useEffect, useRef } from "react";
import { useChat, useToggle } from "@/Hooks";
import { Chat } from "@/types";

const MainChat = () => {
  const devRef = useRef<HTMLDivElement>(null);
  const { chat } = useChat();
  const { collapse, offCollapse } = useToggle();

  //to scroll down
  useEffect(() => {
    devRef.current?.scrollTo({
      top: devRef.current?.scrollHeight,
      behavior: "smooth",
    });
  }, [chat]);

  return (
    <div
      onClick={offCollapse}
      ref={devRef}
      className={clsx("bg-primary p-5 h-[82%] overflow-auto", {
        "text-slate-50": collapse == true,
      })}
    >
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
