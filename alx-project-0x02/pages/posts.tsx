import React from "react";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;
