// pages/about.tsx

import React from "react";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-6">
        Welcome to our site! We are committed to providing the best experience.
      </p>
      <Button onClick={() => alert("Thanks for clicking!")}>Click Me</Button>
    </div>
  );
};

export default About;
