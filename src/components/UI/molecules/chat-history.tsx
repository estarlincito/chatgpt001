import { useChat } from '@/Hooks';
import { Chat } from '@/types';
import ChatCard from './chat-card';
import ChatCardLoadding from './chat-card-loadding';

const ChatHistory = () => {
  const { chat } = useChat();
  return (
    <>
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
    </>
  );
};

export default ChatHistory;
