import { botTp } from "../types/contextTp";

const Bot = ({ date, answer }: botTp) => {
  return (
    <div className="bg-secondary text-primary p-2 r rounded-tr-lg rounded-bl-lg grid max-w-[85%]">
      <p dangerouslySetInnerHTML={{ __html: answer }} />
      <span className="font-lg text-xs justify-self-end select-none">
        {date}
      </span>
    </div>
  );
};

export default Bot;
