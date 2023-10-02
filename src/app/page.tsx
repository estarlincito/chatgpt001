import Link from 'next/link';

const HomePage = () => {
  return (
    <main className='container grid h-screen mx-auto place-items-center md:p-5'>
      {/* <Chatgpt001 /> */}

      <p>
        This project is closed because now I'm using this:{' '}
        <Link
          href='https://estarlincito.com/gpt'
          className='text-black font-bold'
        >
          estarlincito.com/gpt
        </Link>
      </p>
    </main>
  );
};

export default HomePage;
