import Head from "next/head";
import ChatGPT001 from "@/src/components/ChatGPT001";

const HomePage = () => {
  return (
    <>
      <Head>
        <meta name="title" content="CHATGPT001" />
        <meta
          name="description"
          content="CHATGPT001 es un motor de conversación en línea basado en machine
        learning para que los usuarios puedan tener interacciones realistas y
        naturales con un bot."
        />
        <link
          rel="shortcut icon"
          href="https://raw.githubusercontent.com/estarlincito/chatgpt001/main/src/assets/favicon.png"
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
