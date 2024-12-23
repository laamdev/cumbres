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
        className,
        "max-w-3xl font-sans text-yellow opacity-90 text-base sm:text-lg"
      )}
    >
      {children}
    </p>
  );
};
