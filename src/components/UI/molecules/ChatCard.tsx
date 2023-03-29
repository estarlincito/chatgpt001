import clsx from "clsx";
import { ChatCardHeader, ChatCardDate } from "@UI/atoms";

type props = {
  header?: string;
  date: string;
  type: "bot" | "human";
};

const ChatCard = ({ header, date, type }: props) => {
  return (
    <div
      className={clsx(
        "grid  w-fit  max-w-[85%] p-2 mb-5 rounded-tl-lg rounded-br-lg duration-500 drop-shadow-lg",
        {
          "bg-tertiary text-primary": type === "bot",
          "bg-quinary text-primary justify-self-end": type === "human",
        }
      )}
    >
      <ChatCardHeader header={header} />
      <ChatCardDate date={date} />
    </div>
  );
};

export default ChatCard;
