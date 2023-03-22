import { Bot } from "@/app/types";

const BotAnswer = ({ date, answer }: Bot) => {
  return (
    <div className="bg-secondary text-primary p-2 rounded-tr-lg rounded-bl-lg grid max-w-[85%] duration-500">
      <p
        dangerouslySetInnerHTML={{
          __html: `${answer === undefined ? "Sorry );" : answer}`,
        }}
      />
      <span className="text-[0.6rem] opacity-70 justify-self-end select-none">
        {date}
      </span>
    </div>
  );
};

export default BotAnswer;
