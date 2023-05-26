import Head from 'next/head';
import Link from 'next/link';

const NotFounPage = () => {
  return (
    <>
      <Head>
        <title>Página no encontrada</title>
      </Head>

      <main className='grid justify-center items-center h-[90vh]'>
        <div>
          <h3 className='text-3xl'>Lo sentimos…</h3>
          <p className='text-2xl'>Esta página no existe.</p>

          <p>
            Puedes volver a&nbsp;
            <Link
              href='/'
              className='font-bold text-slate-900 hover:text-slate-600 active:text-slate-500 duration-300'
            >
              inicio
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default NotFounPage;
