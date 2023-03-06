import type { AppProps } from "next/app";
import ContextProvider from "../context/ContextProvider";
import "../globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <main className="bg-quinary grid items-center justify-center h-screen">
        <Component {...pageProps} />
      </main>
    </ContextProvider>
  );
}
