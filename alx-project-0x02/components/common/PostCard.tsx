// components/common/PostCard.tsx
import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<{ post: PostProps }> = ({ post }) => {
  const { id, userId, title, body } = post;

  return (
    <div className="border rounded shadow p-4 hover:shadow-lg transition duration-300">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{body}</p>
      <div className="text-sm text-gray-500">
        <span>User ID: {userId}</span> | <span>Post ID: {id}</span>
      </div>
    </div>
  );
};

export default PostCard;
