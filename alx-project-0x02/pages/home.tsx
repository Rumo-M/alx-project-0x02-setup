// pages/home.tsx

import React from "react";
import Header from "@/components/layout/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-2 text-gray-700">
          This is the home page of our Next.js project.
        </p>
      </div>
    </>
  );
};

export default Home;
