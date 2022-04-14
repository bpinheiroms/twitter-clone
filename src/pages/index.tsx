import type { NextPage } from 'next';
import Head from 'next/head';
import Feed from '../components/Feed';
import QuoteModal from '../components/QuoteModal';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Home / Posterr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        <QuoteModal />
      </main>
    </div>
  );
};

export default Home;
