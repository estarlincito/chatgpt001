'use client';
import useChat from '@/Hooks/use-chat';
import useToggle from '@/Hooks/use-toggle';
import { Chat } from '@/types/chat';
import ChatCard from '@UI/molecules/chat-card';
import ChatCardLoadding from '@UI/molecules/chat-card-loadding';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';

const ChatHistory = () => {
  const { chat } = useChat();
  const devRef = useRef<HTMLDivElement>(null);
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
      {chat.map((_chat: Chat) => (
        <div key={_chat.id} className='grid items-center'>
          {_chat.human === undefined ? null : (
            <ChatCard
              type='human'
              header={_chat.human.question}
              date={_chat.human.date}
            />
          )}

          {_chat.bot === undefined ? (
            <ChatCardLoadding />
          ) : (
            <ChatCard
              type='bot'
              header={_chat.bot.answer}
              date={_chat.bot.date}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
