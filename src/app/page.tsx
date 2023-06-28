import Link from 'next/link';

const HomePage = () => {
  return (
    <main className='container grid h-screen mx-auto place-items-center md:p-5'>
      {/* <Chatgpt001 /> */}
      <Link href='https://estarlincito.com/gpt'>
        Please go to: estarlincito.com/gpt
      </Link>
    </main>
  );
};

export default HomePage;
