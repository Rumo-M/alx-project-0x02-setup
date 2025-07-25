// pages/about.tsx

import React from "react";
import Header from "@/components/layout/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p className="mt-2 text-gray-700">
          This page provides information about the project and its goals.
        </p>
      </div>
    </>
  );
};

export default About;
