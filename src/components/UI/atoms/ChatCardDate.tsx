type props = { date: string };

const ChatCardDate = ({ date }: props) => {
  return (
    <span className="text-[0.6rem] opacity-70 justify-self-end select-none">
      {date}
    </span>
  );
};

export default ChatCardDate;
