import { ReactNode } from "react";

export const DetailValue = ({ children }: { children: ReactNode }) => {
  return (
    <h4 className="text-xs font-semibold uppercase text-branding-green sm:text-sm">
      {children}
    </h4>
  );
};
