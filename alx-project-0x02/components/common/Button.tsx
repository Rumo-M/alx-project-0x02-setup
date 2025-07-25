// components/common/Button.tsx

import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = "medium",
  shape = "rounded-md",
}) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
  };

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white hover:bg-blue-700 transition ${sizeClasses[size]} ${shapeClasses[shape]}`}
    >
      {children}
    </button>
  );
};

export default Button;
