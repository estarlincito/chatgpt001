import { ChatCardDate, ChatCardHeader } from '@UI/atoms';
import clsx from 'clsx';

type props = {
  header?: string;
  date: string;
  type: 'bot' | 'human';
};

const ChatCard = ({ header, date, type }: props) => {
  return (
    <div
      className={clsx(
        'grid  w-fit shadow-2xl max-w-[85%] p-2 mb-5 rounded-tl-lg rounded-br-lg duration-500 ',
        {
          'bg-tertiary text-primary': type === 'bot',
          'bg-quinary text-primary justify-self-end': type === 'human',
        }
      )}
    >
      <ChatCardHeader header={header} />
      <ChatCardDate date={date} />
    </div>
  );
};

export default ChatCard;
