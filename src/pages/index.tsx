import Head from "next/head";
import ChatGPT001 from "@/src/components/ChatGPT001";

const HomePage = () => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://raw.githubusercontent.com/estarlincito/chatgpt001/main/src/assets/favicon.ico"
        />
        <meta name="title" content="CHATGPT001"></meta>
        <meta name="description" content="Estarlincito AI"></meta>
        <title>CHATGPT001</title>
      </Head>

      <ChatGPT001 />
    </>
  );
};

export default HomePage;
