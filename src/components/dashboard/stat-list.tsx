import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const StatList = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <ul className={cn("grid gap-5 sm:grid-cols-2", className)}>{children}</ul>
  );
};
