import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About = () => {
  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">About Page</h1>
        <p>This is a simple About page for the application.</p>
        
        {/* Example usage of Button */}
        <Button
          action={() => alert('Button clicked!')}
          buttonLabel="Click Me"
          buttonBackgroundColor="blue"
        />
      </div>
    </>
  );
};

export default About;
