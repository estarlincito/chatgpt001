import { Human } from "@/app/types";

const HumanQuestion = ({ date, question }: Human) => {
  return (
    <div className="bg-quaternary text-primary p-2 rounded-tl-lg rounded-br-lg justify-self-end grid max-w-[85%] duration-500">
      <p>{question}</p>
      <span className="text-[0.6rem] opacity-70 justify-self-end select-none">
        {date}
      </span>
    </div>
  );
};

export default HumanQuestion;
