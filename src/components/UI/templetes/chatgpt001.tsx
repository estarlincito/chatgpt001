import ChatHistory from '@/components/UI/organisms/chat-history';
import { ChatProvider } from '@/context/chat-context';
import { FormProvider } from '@/context/form-context';
import ChatForm from '@UI/molecules/chat-form';
import Nav from '@UI/organisms/navbar';

const Chatgpt001 = () => {
  return (
    <div className='shadow-2xl md:w-[628px] bg-primary h-[628px] rounded-lg w-96  duration-500'>
      <ChatProvider>
        <Nav />
        <ChatHistory />
        <FormProvider>
          <ChatForm />
        </FormProvider>
      </ChatProvider>
    </div>
  );
};

export default Chatgpt001;
