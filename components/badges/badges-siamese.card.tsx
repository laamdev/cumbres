import { UserPeak } from "@/types/payloads"
import { cn, getAllIncluded } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { BadgesSkeleton } from "@/components/badges/badges-skeleton"

export const BadgesSiameseCard = ({
  badgePeaks,
  badgeLabel,
  isLoading,
  summited,
}: {
  badgePeaks: any
  badgeLabel: any
  isLoading: boolean
  summited: UserPeak[]
}) => {
  const badgesPeaksNames = badgePeaks.map((badgePeak: any) => badgePeak.name)
  const summitedNames = summited?.map((peak: UserPeak) => peak.name)
  const completed = getAllIncluded(summitedNames, badgePeaks)

  console.log(badgesPeaksNames)

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
            <AvatarImage src={badgeLabel.imageUrl} alt={badgeLabel.name} />
            <AvatarFallback>{badgeLabel.name}</AvatarFallback>
          </Avatar>
          <p className="mt-1 text-lg font-semibold">{badgeLabel.name}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-branding-green text-branding-white">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-base font-semibold">{`${badgeLabel.name}`}</h4>
            <p>Cumbres que son compartidas por dos provincias</p>
            <ul className="ml-2.5 mt-2.5 list-disc text-sm">
              {badgesPeaksNames.map(
                (badgePeakName: string, badgePeakNameIdx: number) => (
                  <li>
                    {`${badgePeakName} (${badgePeaks[
                      badgePeakNameIdx
                    ].province.join(", ")})`}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
