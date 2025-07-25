import React from "react";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="mb-6">
        Welcome to our site! We provide awesome stuff.
      </p>
      <Button size="medium" shape="rounded-md">
        Click Me
      </Button>
    </div>
  );
};

export default About;
