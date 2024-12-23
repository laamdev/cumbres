import { ReactNode } from "react";
import clsx from "clsx";

export const PeakValue = ({
  children,
  isSummited,
}: {
  children: ReactNode;
  isSummited?: boolean;
}) => {
  return (
    <h3
      className={clsx(
        "font-serif text-lg font-medium leading-tight",
        isSummited ? "text-neutral-100" : "text-neutral-900"
      )}
    >
      {children}
    </h3>
  );
};
