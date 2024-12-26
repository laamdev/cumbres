import Link from "next/link";
import { useRouter } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";
import {
  ChartBar,
  Medal,
  Mountains,
  SignOut,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ProfileMenuProps {
  color?: string;
}

export const ProfileMenu = ({ color }: ProfileMenuProps) => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSingOut = async () => {
    await signOut();
    await router.push("/");
    await router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={color === "green" ? "green" : "default"}>
          Perfil
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{user?.firstName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/cumbres">
            <DropdownMenuItem className="cursor-pointer">
              <Mountains weight="fill" className="size-5 text-primary" />
              <span className="ml-1">Cumbres</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/perfil/estadisticas">
            <DropdownMenuItem className="cursor-pointer">
              <ChartBar weight="fill" className="size-5 text-primary" />
              <span className="ml-1">Estadísticas</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/perfil/logros">
            <DropdownMenuItem className="cursor-pointer">
              <Medal weight="fill" className="size-5 text-primary" />
              <span className="ml-1">Logros</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => handleSingOut()}
          className="cursor-pointer"
        >
          <SignOut weight="fill" className="mr-2 size-7 text-primary" />
          <span>Cerrar sesión</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
