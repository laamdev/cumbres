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

export const BadgesCard = ({
  buttonLabel,
  buttonImageUrl,
  popoverLabel,
  summited,
  intro,
}: {
  buttonLabel: string
  buttonImageUrl: string
  popoverLabel: string[]
  summited: UserPeak
  intro: string
}) => {
  const summit =
    popoverLabel.length === 1 &&
    summited.find((peak: any) => peak.name === popoverLabel[0])

  const label =
    popoverLabel.length === 1 ? popoverLabel[0] : popoverLabel.join(", ")

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
            <AvatarImage src={buttonImageUrl} alt={buttonLabel} />
            <AvatarFallback>{buttonLabel}</AvatarFallback>
          </Avatar>
          <p className="mt-1 text-lg font-semibold">{buttonLabel}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{`${label}`}</h4>
            <p className="text-sm">{`${intro} ${buttonLabel}`}</p>
            {summit && (
              <div className="flex items-center pt-2">
                <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  {`${format(summit.summitDate, "PPP", { locale: es })}`}
                </span>
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
