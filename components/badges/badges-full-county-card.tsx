import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export const BadgesFullCountyCard = ({
  peaks,
  county,
  summits,
}: {
  peaks: any
  county: any
  summits: any
}) => {
  const peaksNames = peaks.map((peak: any) => peak.name)
  const peaksAndProvincesNames = peaks.map(
    (peak: any) => `${peak.name} (${peak.province})`
  )

  const summitedNames = summits?.map((summit: any) => summit.peak.name)

  const checker = (arr: any, target: any) =>
    target.every((v) => arr.includes(v))

  const completed = checker(summitedNames, peaksNames)

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex flex-col items-center">
          <Avatar
            className={cn(
              "tw-transition h-24 w-24 border-4 border-branding-green hover:scale-105",
              completed ? "grayscale-0" : "grayscale"
            )}
          >
            <AvatarImage src={county.imageUrl} alt={county.name} />
            <AvatarFallback>{county.name}</AvatarFallback>
          </Avatar>
          <p className="mt-1 space-x-1">
            <span className="text-lg font-semibold">{county.name}</span>
            <span className="text-sm">{`(${peaksNames.length})`}</span>
          </p>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{`${peaksAndProvincesNames.join(
              ", "
            )}`}</h4>
            <p className="text-sm">{`Todos los picos de ${county.name}`}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
