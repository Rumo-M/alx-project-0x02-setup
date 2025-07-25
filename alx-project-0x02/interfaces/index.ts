// ButtonProps interface
export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-lg";
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

// CardProps interface
export interface CardProps {
  title: string;
  content: string;
}
