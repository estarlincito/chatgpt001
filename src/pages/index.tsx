import Head from "next/head";
import ChatGPT001 from "@/src/components/ChatGPT001";

const HomePage = () => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://github.com/estarlincito/chatgpt001/blob/main/src/assets/favicon.svg"
        />
        <meta name="title" content="CHATGPT001"></meta>
        <meta name="description" content="Estarlincito IA"></meta>
        <title>CHATGPT001</title>
      </Head>

      <ChatGPT001 />
    </>
  );
};

export default HomePage;
