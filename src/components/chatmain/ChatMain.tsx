"use client";
import { useEffect, useRef } from "react";
import { useAppContext } from "@/context";
import Content from "./content";

const ChatMain = () => {
  const { chats, handleFalse } = useAppContext();
  const boxRef = useRef<HTMLDivElement>(null);

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
      <Content />
    </div>
  );
};

export default ChatMain;
