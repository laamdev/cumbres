import { ReactNode } from "react";

import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";

interface LayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: LayoutProps) {
  return (
    <div className="bg-branding-yellow text-branding-green">
      <Header color="green" />
      {children}
      <Footer color="green" />
    </div>
  );
}
