import Link from "next/link";
import { useRouter } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";
import {
  BarChartIcon,
  LogOutIcon,
  MedalIcon,
  MountainIcon,
} from "lucide-react";

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

export const ProfileMenu = ({ color }: { color: string }) => {
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
            <DropdownMenuItem>
              <MountainIcon className="mr-2 h-4 w-4 text-primary" />
              <span>Cumbres</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/perfil/estadisticas">
            <DropdownMenuItem>
              <BarChartIcon className="mr-2 h-4 w-4 text-primary" />
              <span>Estadísticas</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/perfil/logros">
            <DropdownMenuItem>
              <MedalIcon className="mr-2 h-4 w-4 text-primary" />
              <span>Logros</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleSingOut()}>
          <LogOutIcon className="mr-2 h-4 w-4 text-primary" />
          <span>Cerrar sesión</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
