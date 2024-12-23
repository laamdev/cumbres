import Link from "next/link";
import { Mountains } from "@phosphor-icons/react/dist/ssr";

export const HeaderDashboard = () => {
  return (
    <nav className="sticky top-4 z-50 mx-4 flex max-w-2xl items-center justify-between rounded-lg bg-white p-4 sm:mx-auto">
      <Link href="/">
        <Mountains
          weight="fill"
          className="tw-transition h-8 w-8 text-branding-yellow hover:text-branding-yellow-500 sm:h-12 sm:w-12"
        />
      </Link>
    </nav>
  );
};
