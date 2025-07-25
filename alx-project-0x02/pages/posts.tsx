import React from "react";
import Header from "@/components/layout/Header";

const Posts = () => {
  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
        <p>This is where the list of posts will be displayed.</p>
      </div>
    </>
  );
};

export default Posts;
