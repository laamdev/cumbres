import { FlagBannerFold } from "@phosphor-icons/react/dist/ssr";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { getFormattedDate } from "@/lib/utils";

interface SummitTooltipProps {
  summitDate: Date;
}

export const SummitTooltip = ({ summitDate }: SummitTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <FlagBannerFold
            weight="fill"
            className="size-9 rounded-full fill-branding-green bg-branding-yellow px-1.5 sm:size-11"
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{`Cumbre coronada el ${getFormattedDate(summitDate)}.`}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
