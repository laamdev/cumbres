import { CalendarDays, MedalIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export const MedalHoverCard = ({
  name,
  highestPoint,
}: {
  name: string
  highestPoint: string[]
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar className="flex items-center justify-center bg-branding-green text-branding-white">
          <MedalIcon />
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-sm">{`Punto más alto de ${highestPoint.join(
            " y "
          )}`}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
