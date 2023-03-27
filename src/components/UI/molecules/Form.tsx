"use client";
import { currentTimer } from "@/utils";
import { useAppContext } from "@/context";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { FormInput, FormSubmit } from "@UI/atoms";
import { Chats } from "@/types";

const Form = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const { chats, setChats, question, setQuestion, handleFalse } =
    useAppContext();

  //watch Input from Value
  useEffect(() => {
    const subscription = watch((value) => setQuestion(value.question));
    return () => subscription.unsubscribe();
  }, [setQuestion, watch]);

  //Submit form
  const onSubmit = handleSubmit(async (data) => {
    //reset form
    setValue("question", "");
    //get current date
    const date = currentTimer();

    //human chat
    const chat: Chats = {
      id: chats.length,
      human: { date: date, question },
      bot: undefined,
    };

    //set Human Question
    setChats([...chats, chat]);

    //Get Answer from server
    const res = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({
        question,
      }),
    });
    const { answer } = await res.json();

    //human and bot chat
    chat.bot = { date: date, answer };
    //Save  Bot and Human data in history
    setChats([...chats, chat]);
  });

  return (
    <form
      onClick={handleFalse}
      onSubmit={onSubmit}
      className="bg-primary rounded-b-lg grid grid-cols-8 pb-1 border-solid border-t border-t-tertiary border-opacity-30"
    >
      <FormInput register={register} />
      <FormSubmit />
    </form>
  );
};

export default Form;
