import { ReactNode } from "react";

export const PublicPeakList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="mx-auto sm:mt-10 mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2">
      {children}
    </ul>
  );
};
