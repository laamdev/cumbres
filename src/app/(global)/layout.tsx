import { ReactNode } from "react";

import { Footer } from "@/components/navigation/footer";
import { Header } from "@/components/navigation/header";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header color="green" />
      {children}
      <Footer color="green" />
    </div>
  );
}
