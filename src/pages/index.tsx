import Head from "next/head";
import ChatGPT001 from "@/src/components/ChatGPT001";

const HomePage = () => {
  return (
    <>
      <Head>
        <meta name="title" content="CHATGPT001" />
        <meta name="description" content="Estarlincito AI" />
        <link
          rel="shortcut icon"
          href="https://raw.githubusercontent.com/estarlincito/chatgpt001/main/src/assets/favicon.ico"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="chatgpt001.vercel.app" />

        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/estarlincito/chatgpt001/main/src/assets/favicon.ico"
        />
        <title>CHATGPT001</title>
      </Head>

      <ChatGPT001 />
    </>
  );
};

export default HomePage;
