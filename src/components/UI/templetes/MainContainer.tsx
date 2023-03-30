import { MainChat, Nav } from "@UI/organisms";
import { Form } from "@UI/molecules";
import { ChatProvider, FormProvider } from "@/context";

const MainContainer = () => {
  return (
    <main className="container grid h-screen mx-auto place-items-center">
      <div className="drop-shadow-lg md:w-[628px] bg-primary h-[628px] rounded-lg w-96  duration-500">
        <ChatProvider>
          <Nav />
          <MainChat />
          <FormProvider>
            <Form />
          </FormProvider>
        </ChatProvider>
      </div>
    </main>
  );
};

export default MainContainer;
