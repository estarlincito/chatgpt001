import { MainChat, Nav } from "@UI/organisms";
import { Form } from "@UI/molecules";
import { ChatProvider, FormProvider } from "@/context";

const MainContainer = () => {
  return (
    <main className="container grid h-screen mx-auto place-items-center">
      <div className="grid grid-flow-row w-96 h-[80vh] duration-500 drop-shadow-lg md:w-[500px] bg-primary min-h-[300px] rounded-lg">
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
