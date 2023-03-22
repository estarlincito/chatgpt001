import "@/styles/globals.css";
import { ContextProvider } from "@/context";

export const metadata = {
  title: "CHATGPT001",
  openGraph: {
    title: "CHATGPT001",
    siteName: "CHATGPT001",
    type: "website",
    description:
      "CHATGPT001 es un motor de conversación en línea basado en machine learning para que los usuarios puedan tener interacciones realistas y naturales con un bot.",
    url: "https://chatgpt001.vercel.app",
    // images: [
    //   {
    //     url: "",
    //     width: 800,
    //     height: 600,
    //   },
    // ],
  },

  icons: {
    icon: "https://raw.githubusercontent.com/estarlincito/chatgpt001/main/app/assets/favicon.png",
    shortcut:
      "https://raw.githubusercontent.com/estarlincito/chatgpt001/main/app/assets/favicon.png",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContextProvider>
      <html lang="es">
        <body>
          <main className="bg-quinary grid items-center justify-center h-screen">
            {children}
          </main>
        </body>
      </html>
    </ContextProvider>
  );
};

export default RootLayout;