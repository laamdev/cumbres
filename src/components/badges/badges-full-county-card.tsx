import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BadgesSkeleton } from "@/components/badges/badges-skeleton";

import { cn, getAllIncluded } from "@/lib/utils";

interface BadgesFullCountyCardProps {
  badgePeaks: {
    name: string;
    province: string;
  }[];
  badgeCounty: {
    name: string;
    imageUrl: string;
  };
  summited: {
    name: string;
  }[];
  isLoading: boolean;
}

export const BadgesFullCountyCard = ({
  badgePeaks,
  badgeCounty,
  summited,
  isLoading,
}: BadgesFullCountyCardProps) => {
  if (isLoading) return <BadgesSkeleton />;

  const badgePeaksNames = badgePeaks.map((badgePeak) => badgePeak.name);
  const badgePeaksAndProvincesNames = badgePeaks.map(
    (peak) => `${peak.name} (${peak.province})`
  );

  const summitedNames = summited?.map((peak) => peak.name);

  const completed = getAllIncluded(summitedNames, badgePeaksNames);

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
            <AvatarImage src={badgeCounty.imageUrl} alt={badgeCounty.name} />
            <AvatarFallback>{badgeCounty.name}</AvatarFallback>
          </Avatar>
          <p className="mt-1 space-x-1">
            <span className="text-lg font-semibold">{badgeCounty.name}</span>
            <span className="text-sm">{`(${badgePeaksNames.length})`}</span>
          </p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-branding-green text-branding-white">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-base font-semibold">{`${badgePeaksAndProvincesNames.join(
              ", "
            )}`}</h4>
            <p className="text-sm">{`Todos los picos de ${badgeCounty.name}`}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
