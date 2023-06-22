import Link from "next/link"
import { useRouter } from "next/navigation"
import { useClerk, useUser } from "@clerk/nextjs"
import { BarChartIcon, LogOutIcon, MedalIcon, MountainIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  // DropdownMenuPortal,
  DropdownMenuSeparator,
  // DropdownMenuShortcut,
  // DropdownMenuSub,
  // DropdownMenuSubContent,
  // DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const ProfileMenu = ({ color }: { color: string }) => {
  const { isLoaded, isSignedIn, user } = useUser()
  const { signOut } = useClerk()
  const router = useRouter()

  // if (!user) return <div>Not logged in</div>;

  const handleSingOut = async () => {
    await signOut()
    await router.push("/")
    await router.refresh()
  }

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
          <Link href="/perfil/cumbres">
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
          {/* <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        {/* <DropdownMenuSeparator /> */}
        {/* <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup> */}
        {/* <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleSingOut()}>
          <LogOutIcon className="mr-2 h-4 w-4 text-primary" />
          <span>Cerrar sesión</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
