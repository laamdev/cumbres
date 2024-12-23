import { format } from "date-fns";
import { CalendarDaysIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { peaks } from "@/data/peaks";

export const BadgesHighestCard = ({ badge }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex flex-col items-center">
          <Avatar
            className={cn(
              "tw-transition h-24 w-24 border-4 border-branding-green hover:scale-105"
              isHighestSpain ? "grayscale-0" : "grayscale"
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
            <p className="text-sm">{`Cumbre más alta de ${badge.name}`}</p>
            {/* {summit && (
              <div className="flex items-center pt-2">
                <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-branding-white/75">
                  {`${format(new Date(summit.summitDate!), "PPP", {
                    locale: es,
                  })}`}
                </span>
              </div>
            )} */}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
