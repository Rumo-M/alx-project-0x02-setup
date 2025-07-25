// pages/about.tsx

import React from "react";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-6 text-lg">
        We are a company dedicated to delivering excellent service and innovative solutions.
      </p>
      <Button onClick={() => alert("Button clicked!")}>Learn More</Button>
    </div>
  );
};

export default About;
