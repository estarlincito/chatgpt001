'use client';
import { ChatContext, FormContext } from '@/context';
import { Chat } from '@/types';
import { currentTimer } from '@/utils';
import { ChangeEvent, useContext } from 'react';

//Types
type FormEvent = ChangeEvent<HTMLInputElement>;
//Use Context
export const useForm = () => {
  try {
    const { question, setQuestion } = useContext(FormContext);
    const { chat, setChat } = useContext(ChatContext);

    const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      //get current date
      const date = currentTimer();
      //human chat
      const _chat: Chat = {
        id: chat.length,
        human: { date: date, question },
        bot: undefined,
      };

      // //reset form
      setQuestion('');

      //set Human Question
      setChat([...chat, _chat]);

      //Get Answer from server
      const res = await fetch('/api', {
        method: 'POST',
        body: JSON.stringify({
          question: _chat.human?.question,
        }),
      });
      const { answer } = await res.json();

      //human and bot chat
      _chat.bot = { date: date, answer };
      //Save  Bot and Human data in history
      setChat([...chat, _chat]);
    };

    const onChange = ({ target }: FormEvent) => {
      const { value } = target;
      setQuestion(value);
    };

    return { question, onChange, onSubmit };
  } catch (error) {
    throw new Error(
      'useForm must be used within a FormContext or useForm must be used within a ChatContext'
    );
  }
};
