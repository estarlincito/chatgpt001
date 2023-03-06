import { humanTp } from "../types/contextTp";

const Human = ({ date, question }: humanTp) => {
  return (
    <div className="bg-quaternary text-primary p-2 r rounded-tl-lg rounded-br-lg justify-self-end grid w-10/12">
      <p>{question}</p>
      <span className="font-lg text-xs justify-self-end select-none">
        {date}
      </span>
    </div>
  );
};

export default Human;
