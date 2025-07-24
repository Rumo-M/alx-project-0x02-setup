// pages/home.tsx

import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | ALX Project</title>
      </Head>
      <section className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to the Home Page</h1>
        <p className="text-lg text-gray-600">
          Explore our listings, learn more about us, and find your dream property!
        </p>
      </section>
    </>
  );
};

export default Home;
