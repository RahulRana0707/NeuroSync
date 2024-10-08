"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button className={"bg-red-700 p-2 text-white rounded-lg"}>
      {children}
    </button>
  );
};
