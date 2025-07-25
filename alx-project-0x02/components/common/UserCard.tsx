// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces";

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
};

export default UserCard;
