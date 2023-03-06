import Form from "./Form";
import Header from "./navbar/Header";
import Chat from "./Chat";

const ChatGPT001 = () => {
  return (
    <div className="w-96 h-[80vh] p-3 duration-500">
      <Header />
      <Chat />
      <Form />
    </div>
  );
};

export default ChatGPT001;
