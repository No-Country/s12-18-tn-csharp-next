import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn(`mx-auto w-[90%] max-w-6xl`, className)}>{children}</div>
  );
};

export default Container;
