import { format } from "date-fns"
import es from "date-fns/locale/es"
import { CalendarDaysIcon } from "lucide-react"

import { UserPeak } from "@/types/payloads"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { BadgesSkeleton } from "@/components/badges/badges-skeleton"

export const BadgesCard = ({
  badgePeak,
  badgeCounty,
  summited,
  isLoading,
}: {
  badgePeak: any
  badgeCounty: any
  summited: UserPeak[]
  isLoading: boolean
}) => {
  if (isLoading) return <BadgesSkeleton />

  const summit = summited.find((peak: any) => peak.name === badgePeak.name)
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex flex-col items-center">
          <Avatar
            className={cn(
              "tw-transition h-24 w-24 border-4 border-branding-green hover:scale-105",
              summit ? "grayscale-0" : "grayscale"
            )}
          >
            <AvatarImage src={badgeCounty.imageUrl} alt={badgeCounty.name} />
            <AvatarFallback>{badgeCounty.name}</AvatarFallback>
          </Avatar>
          <p className="mt-1 text-lg font-semibold">{badgeCounty.name}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{`${badgePeak.name}`}</h4>
            <p className="text-sm">{`Cumbre más alta de ${badgeCounty.name}`}</p>
            {summit && (
              <div className="flex items-center pt-2">
                <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  {`${format(new Date(summit.summitDate!), "PPP", {
                    locale: es,
                  })}`}
                </span>
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
