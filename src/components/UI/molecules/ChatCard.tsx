import { ChatCardHeader, ChatCardDate } from "@UI/atoms";

type props = {
  header?: string;
  date: string;
  type: "bot" | "human";
};

const ChatCard = ({ header, date, type }: props) => {
  return (
    <div
      className={`grid max-w-[85%] p-2 mb-5 rounded-tl-lg rounded-br-lg duration-500 drop-shadow-lg ${
        type === "bot"
          ? "bg-tertiary text-primary"
          : "bg-quinary text-primary justify-self-end"
      }`}
    >
      <ChatCardHeader header={header} />
      <ChatCardDate date={date} />
    </div>
  );
};

export default ChatCard;
