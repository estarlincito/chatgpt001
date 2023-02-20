import { ChangeEvent, FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import AppContext from "@/src/context/AppContext";
import currentTimer from "@/src/utils/currentTimer";
import { serverResults } from "@/src/utils/serverResults";
import { IoChevronForwardCircleSharp } from "react-icons/io5";

//Style
const FormHTML = styled.form`
  background-color: var(--color6);
  display: grid;
  grid-template-columns: auto 45px;
  border-radius: 0px 0px 10px 10px;
  border-top: 1px solid var(--color2);

  & input {
    font-weight: lighter;
    border: none;
    outline: unset;
    padding: 10px 20px 10px 25px;
    border-radius: 0px 0px 0px 10px;
    font-size: 1em;
  }

  & button {
    all: unset;
    background-color: var(--color6);
    color: var(--color1);
    border-radius: 0px 0px 10px 0px;
    padding-top: 8px;
    font-weight: bold;
    font-size: 20px;
    border: none;
    user-select: none;
    cursor: pointer;
  }
`;

const Form = () => {
  const { chats, setChats } = useContext(AppContext);
  const [input, setInput] = useState("");

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
    <FormHTML onSubmit={handleSubmit}>
      <input
        required
        autoFocus
        placeholder="Escribe aquí"
        maxLength={4000}
        value={input}
        onChange={handleChange}
      />

      {input === "" ? (
        <span />
      ) : (
        <button>
          <IoChevronForwardCircleSharp />
        </button>
      )}
    </FormHTML>
  );
};

export default Form;
