import { MainChat, Nav } from "@UI/organisms";
import { Form } from "@UI/molecules";
import { ChatProvider, FormProvider } from "@/context";
import { Opacity } from "@UI/atoms";

const MainContainer = () => {
  return (
    <main className="grid items-center justify-center h-screen p-2">
      <div className="w-96 h-[80vh] duration-500 drop-shadow-lg md:w-[500px] bg-primary rounded-lg">
        <ChatProvider>
          <Nav />
          <Opacity />
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
