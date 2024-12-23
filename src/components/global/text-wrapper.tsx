import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const TextWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "max-w-3xl font-sans opacity-90 text-base sm:text-lg",
        className
      )}
    >
      {children}
    </p>
  );
};
