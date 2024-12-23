import { Avatar } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { FlagIcon } from "@/components/icons/flag";

import { getCountyNames } from "@/lib/utils";

export const MedalHoverCard = ({
  name,
  highestPoint,
}: {
  name: string;
  highestPoint: string[];
}) => {
  const highestPoints = getCountyNames(highestPoint);
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar className="flex items-center justify-center bg-branding-yellow text-branding-green">
          <FlagIcon className="size-7 p-1.5 fill-branding-green sm:size-9" />
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-sm">{`Punto más alto de ${highestPoints}`}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
