// pages/home.tsx

import React from "react";
import Card from "@/components/common/Card";

const Home: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page</h1>
      
      <Card title="Sample Card Title" content="This is some sample content inside the card." />
      <Card title="Another Card" content="More content goes here." />
    </div>
  );
};

export default Home;
