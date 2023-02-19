import styled from "styled-components";
import Form from "./Form";
import Header from "./Header";
import Chat from "./Chat";

//Style
const ChatgptDiv = styled.div`
  background-color: var(--color3);
  color: var(--color1);
  height: 600px;
  width: 380px;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 60px auto 60px;
`;

//JSX
const ChatGPT001 = () => {
  return (
    <ChatgptDiv>
      <Header />
      <Chat />
      <Form />
    </ChatgptDiv>
  );
};

export default ChatGPT001;
