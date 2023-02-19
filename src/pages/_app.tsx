import type { AppProps } from "next/app";
import ContextProvider from "../context/ContextProvider";
import { GlobalStyle, Wrapper } from "@/GlobalStyle";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Wrapper>
        <Component {...pageProps} />
        <Footer />
      </Wrapper>
    </ContextProvider>
  );
}
