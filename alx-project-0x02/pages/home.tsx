import React from "react";
import Card from "@/components/common/Card";

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <Card title="Welcome to the App" content="This is a sample card on the home page." />
    </div>
  );
};

export default Home;
