import { ReactNode } from "react";
import clsx from "clsx";

export const PeakLabel = ({
  children,
  isSummited,
}: {
  children: ReactNode;
  isSummited?: boolean;
}) => {
  return (
    <p
      className={clsx(
        "text-base",
        isSummited ? "text-neutral-400" : "text-neutral-600"
      )}
    >
      {children}
    </p>
  );
};
