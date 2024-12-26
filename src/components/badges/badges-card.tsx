import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { Badge } from "@/types/peaks";

interface BadgesCardProps {
  badge: Badge;
  completed?: boolean;
}

export const BadgesCard = ({ badge, completed }: BadgesCardProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex flex-col items-center">
          <Avatar
            className={cn(
              "tw-transition h-24 w-24 border-4 border-branding-green hover:scale-105",
              completed ? "grayscale-0" : "grayscale opacity-50"
            )}
          >
            <AvatarImage src={badge.imageUrl} alt={badge.label} />
            <AvatarFallback>{badge.label}</AvatarFallback>
          </Avatar>
          <p className="mt-1 text-lg font-semibold">{badge.label}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-branding-green text-branding-white">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-base font-semibold">{`${badge.label}`}</h4>
            <p className="text-sm">{`${badge.value}`}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
