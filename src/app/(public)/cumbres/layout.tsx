import { ReactNode } from "react";

import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";

interface LayoutProps {
  children: ReactNode;
}

export default async function PublicLayout({ children }: LayoutProps) {
  return (
    <div className="bg-branding-green text-branding-yellow">
      <Header color="yellow" />
      {children}
      <Footer color="yellow" />
    </div>
  );
}
