import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container relative flex h-screen items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {children}
    </div>
  );
}
