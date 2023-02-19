import Bot from "./Bot";
import Human from "./Human";
import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import AppContext from "@/src/context/AppContext";
import currentTimer from "../utils/currentTimer";

//style
const Box = styled.div`
  background-color: var(--color6);
  overflow: auto;
  padding: 1.25rem;
  display: grid;
  align-items: center;
  row-gap: 20px;
`;

const Container = styled.div`
  display: grid;
  row-gap: 1.25rem;
`;

const Chat = () => {
  const { chats } = useContext(AppContext);
  const boxRef = useRef<HTMLDivElement>(null);

  const initChat = {
    date: currentTimer(),
    answer: `Hola, soy la hija de <b>Estarlincito</b>, ¿en qué puedo ayudarte?`,
  };

  //to scroll down
  useEffect(() => {
    boxRef.current?.scrollTo({
      top: boxRef.current?.scrollHeight,
      behavior: "smooth",
    });
  }, [chats]);

  return (
    <Box ref={boxRef}>
      {chats.length === 0 ? (
        <Container>
          <Bot date={initChat.date} answer={initChat.answer} />
        </Container>
      ) : (
        <>
          {chats.map((chat) => (
            <Container key={chat.id}>
              <Human date={chat.human.date} question={chat.human.question} />

              {chat.bot === undefined ? null : (
                <Bot date={chat.bot.date} answer={chat.bot.answer} />
              )}
            </Container>
          ))}
        </>
      )}
    </Box>
  );
};

export default Chat;
