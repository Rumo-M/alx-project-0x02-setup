
// interfaces/index.ts

import React from "react";

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md";
  onClick?: () => void;
  children: React.ReactNode;
}
