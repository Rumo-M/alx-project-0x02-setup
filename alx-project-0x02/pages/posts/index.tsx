// pages/posts/index.tsx

import React from "react";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}

const Posts = ({ posts }: { posts: PostProps[] }) => {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">All Posts</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Posts;
