import Chatgpt001 from "./components/Chatgpt001";
import Navbar from "@/app/components/navbar";
import Chatmain from "@/app/components/chatmain";
import Form from "@/app/components/Form";

const HomePage = () => {
  return (
    <Chatgpt001>
      <Navbar />
      <Chatmain />
      <Form />
    </Chatgpt001>
  );
};

export default HomePage;
