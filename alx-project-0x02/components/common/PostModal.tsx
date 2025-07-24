// components/common/PostModal.tsx

import React, { useState, useEffect } from "react";

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
  initialData?: PostData | null;
}

const PostModal: React.FC<PostModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData = null,
}) => {
  const [post, setPost] = useState<PostData>(
    initialData || { userId: 0, title: "", body: "" }
  );

  useEffect(() => {
    if (initialData) {
      setPost(initialData);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost(prev => ({
      ...prev,
      [name]: name === "userId" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Post Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="userId">User ID</label>
            <input
              type="number"
              id="userId"
              name="userId"
              value={post.userId}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="body">Body</label>
            <textarea
              id="body"
              name="body"
              value={post.body}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows={4}
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
