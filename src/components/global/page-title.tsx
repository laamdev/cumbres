import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageTitleProps {
  children: ReactNode;
  className?: string;
}

export const PageTitle = ({ children, className }: PageTitleProps) => {
  return (
    <h1
      className={cn(
        "font-serif text-4xl font-bold uppercase tracking-tighter sm:text-6xl",
        className
      )}
    >
      {children}
    </h1>
  );
};
