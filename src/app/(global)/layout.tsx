import { ReactNode } from "react";

import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";

interface LayoutProps {
  children: ReactNode;
}

export default async function GlobalLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header color="green" />
      {children}
      <Footer color="green" />
    </div>
  );
}
