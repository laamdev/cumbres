import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { BadgesSkeleton } from "@/components/badges/badges-skeleton"

export const BadgesCard = ({
  label,
  value,
  isLoading,
  totalSummited,
  filter,
}: {
  label: any
  value: any
  isLoading: boolean
  totalSummited: number
  filter: number
}) => {
  if (isLoading) return <BadgesSkeleton />

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex flex-col items-center">
          <Avatar
            className={cn(
              "tw-transition h-24 w-24 border-4 border-branding-green hover:scale-105",
              totalSummited >= filter ? "grayscale-0" : "grayscale"
            )}
          >
            <AvatarImage src={label.imageUrl} alt={label.name} />
            <AvatarFallback>{label.name}</AvatarFallback>
          </Avatar>
          <p className="mt-1 text-lg font-semibold">{label.name}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-branding-green text-branding-white">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-base font-semibold">{`${label.name}`}</h4>
            <p className="text-sm">{`${value.name}`}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
