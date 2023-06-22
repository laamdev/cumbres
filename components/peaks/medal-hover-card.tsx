import { MedalIcon } from "lucide-react"

import { Avatar } from "@/components/ui/avatar"
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
        <Avatar className="flex items-center justify-center bg-branding-yellow text-branding-green">
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
