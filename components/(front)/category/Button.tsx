import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      className={`rounded-md px-6 py-2 font-medium shadow-sm transition-all hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
