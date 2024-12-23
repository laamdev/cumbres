import { ReactNode } from "react";

export const PageTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-serif text-4xl font-bold uppercase tracking-tighter sm:text-6xl">
      {children}
    </h1>
  );
};
