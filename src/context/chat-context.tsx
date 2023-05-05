'use client';
import { Chat } from '@/types';
import { initialChat } from '@/utils';
import { createContext, ReactNode, useEffect, useRef, useState } from 'react';

//Create Context
interface Context {
  chat: Chat[];
  setChat: (chat: Chat[]) => void;
}

export const ChatContext = createContext({} as Context);

//Set Provider
export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chat, setChat] = useState<Chat[]>([]);
  const appRender = useRef(0);

  //whent app start
  useEffect(() => {
    const lsChat = localStorage.getItem('chat');

    if (lsChat === null) {
      localStorage.setItem('chat', JSON.stringify(initialChat));
      setChat(initialChat);
    } else {
      setChat(JSON.parse(lsChat));
    }
  }, []);

  //if chat change, save to local storage
  useEffect(() => {
    if (appRender.current === 0) {
      appRender.current += 1;
      return;
    }
    localStorage.setItem('chat', JSON.stringify(chat));
  }, [chat]);

  return (
    <ChatContext.Provider value={{ chat, setChat }}>
      {children}
    </ChatContext.Provider>
  );
};
