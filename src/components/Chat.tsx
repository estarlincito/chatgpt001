import Bot from "./Bot";
import Human from "./Human";
import { useContext } from "react";
import styled from "styled-components";
import AppContext from "@/src/context/AppContext";
import currentTimer from "../utils/currentTimer";

//style
const ChatHTML = styled.div`
  background-color: var(--color6);
  padding: 1.25rem;
  display: grid;
  align-items: center;
  row-gap: 40px;
  overflow-y: scroll;

  & h3 {
    align-self: center;
    justify-self: center;
    user-select: none;
  }
`;

const Chat = () => {
  const { chats } = useContext(AppContext);
  const initDate = currentTimer();
  const initAnswer = `Hello, I'm <b>Estarlincito's son</b>, how can I help you?`;

  return (
    <ChatHTML>
      {chats.length === 0 ? (
        <Bot date={initDate} answer={initAnswer} />
      ) : (
        <>
          {chats.map((chat) => (
            <>
              <Human
                key={chat.id}
                date={chat.human.date}
                question={chat.human.question}
              />

              {chat.bot === undefined ? null : (
                <Bot
                  key={chat.id}
                  date={chat.bot.date}
                  answer={chat.bot.answer}
                />
              )}
            </>
          ))}
        </>
      )}
    </ChatHTML>
  );
};

export default Chat;
