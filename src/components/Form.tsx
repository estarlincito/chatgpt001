import { ChangeEvent, FormEvent, useContext, useState } from "react";
import AppContext from "@/src/context/AppContext";
import { currentTimer } from "@/src/utils/currentTimer";
import { serverResults } from "@/src/utils/serverResults";
import { IoChevronForwardCircleSharp } from "react-icons/io5";

const Form = () => {
  const { chats, setChats } = useContext(AppContext);
  const [input, setInput] = useState("");
  const { handleFalse } = useContext(AppContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const date = currentTimer();
    e.preventDefault();

    setChats([
      ...chats,
      { id: chats.length, human: { date: date, question: input } },
    ]);

    setInput("");

    (async () => {
      //Save  Bot and Human data in history
      const data = await serverResults(input);
      const answer =
        data.choices === undefined ? "Sorry );" : data.choices[0].text;

      setChats([
        ...chats,
        {
          id: chats.length,
          human: { date: date, question: input },
          bot: { date: date, answer: answer },
        },
      ]);
    })();
  };

  return (
    <form
      onClick={handleFalse}
      onSubmit={handleSubmit}
      className="bg-slate-50 border-solid border-t border-t-secondary rounded-b-lg grid grid-cols-8 pb-1"
    >
      <input
        required
        autoFocus
        placeholder="Escribe aquí"
        maxLength={500}
        value={input}
        onChange={handleChange}
        className="bg-slate-50 font-light border-none outline-none py-3 pl-5 pr-6 rounded-bl-lg text-base col-span-7"
      />

      {input === "" ? (
        <span />
      ) : (
        <button className="text-primary pt-2 font-bold text-xl border-none select-none cursor-pointer col-span-1">
          <IoChevronForwardCircleSharp />
        </button>
      )}
    </form>
  );
};

export default Form;
