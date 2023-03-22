"use client";
import { currentTimer } from "@/utils";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { useAppContext } from "@/context";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const Form = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const { chats, setChats, handleFalse } = useAppContext();
  const [input, setInput] = useState("");

  //watch Input Value
  useEffect(() => {
    const subscription = watch((value) => setInput(value.question));
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = handleSubmit((data) => {
    const { question } = data;
    const date = currentTimer();

    //set Human Question
    setChats([...chats, { id: chats.length, human: { date: date, question } }]);

    //Get Answer from server
    (async () => {
      const res = await fetch("https://chatgpt001.vercel.app/api", {
        method: "POST",
        body: JSON.stringify({
          question,
        }),
      });
      const { answer } = await res.json();

      //Save  Bot and Human data in history
      setChats([
        ...chats,
        {
          id: chats.length,
          human: { date: date, question },
          bot: { date: date, answer: answer },
        },
      ]);
    })();

    //set input to ""
    setValue("question", "");
  });

  return (
    <form
      onClick={handleFalse}
      onSubmit={onSubmit}
      className="bg-slate-50 border-solid border-t border-t-secondary rounded-b-lg grid grid-cols-8 pb-1"
    >
      <input
        autoFocus
        required
        placeholder="Escribe aquí"
        className="bg-slate-50 font-light border-none outline-none py-3 pl-5 pr-6 rounded-bl-lg text-base col-span-7"
        {...register("question", { required: true, maxLength: 500 })}
      />

      {input === "" ? (
        <span className="select-none" />
      ) : (
        <button className="text-primary pt-2 font-bold text-xl border-none select-none cursor-pointer col-span-1">
          <IoChevronForwardCircleSharp />
        </button>
      )}
    </form>
  );
};

export default Form;
