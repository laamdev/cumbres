import { ReactNode } from "react";

export const BadgesHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="font-serif text-3xl font-semibold capitalize">{children}</h2>
  );
};
