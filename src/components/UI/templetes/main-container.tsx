import { ChatProvider, FormProvider } from '@/context';
import { Form } from '@UI/molecules';
import { MainChat, Nav } from '@UI/organisms';

const MainContainer = () => {
  return (
    <main className='container grid h-screen mx-auto place-items-center'>
      <div className='shadow-2xl md:w-[628px] bg-primary h-[628px] rounded-lg w-96  duration-500'>
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
