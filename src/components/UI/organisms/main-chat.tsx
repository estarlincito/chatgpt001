'use client';
import { useChat, useToggle } from '@/Hooks';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { ChatHistory } from '../molecules';

const MainChat = () => {
  const devRef = useRef<HTMLDivElement>(null);
  const { chat } = useChat();
  const { collapse, offCollapse } = useToggle();

  //to scroll down
  useEffect(() => {
    devRef.current?.scrollTo({
      top: devRef.current?.scrollHeight,
      behavior: 'smooth',
    });
  }, [chat]);

  return (
    <div
      ref={devRef}
      onClick={offCollapse}
      className={clsx('h-[500px] p-5 overflow-scroll scroll-smooth', {
        'opacity-60': collapse === true,
      })}
    >
      <ChatHistory />
    </div>
  );
};

export default MainChat;
