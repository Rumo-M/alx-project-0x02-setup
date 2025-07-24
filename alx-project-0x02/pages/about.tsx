// pages/about.tsx

import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About | ALX Project</title>
      </Head>
      <section className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">About This Project</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          This project is part of the ALX Software Engineering curriculum. It demonstrates how to set up
          a modern, responsive frontend using Next.js, TypeScript, and Tailwind CSS.
        </p>
      </section>
    </>
  );
};

export default About;
