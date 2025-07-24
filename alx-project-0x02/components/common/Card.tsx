// components/common/Card.tsx

import React from "react";

interface CardProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, subtitle, imageUrl, children }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        <div className="mt-2 text-gray-700 text-sm">{children}</div>
      </div>
    </div>
  );
};

export default Card;
