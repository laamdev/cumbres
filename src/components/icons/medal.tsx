import { cn } from "@/lib/utils";

interface MedalIconProps {
  className?: string;
}

export const MedalIcon = ({ className }: MedalIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 256 256"
      className={cn("fill-current", className)}
    >
      <path d="M216 96a88 88 0 1 0-144 67.83V240a8 8 0 0 0 11.58 7.16L128 225l44.43 22.21a8.1 8.1 0 0 0 3.57.79 8 8 0 0 0 8-8v-76.17A87.85 87.85 0 0 0 216 96M56 96a72 72 0 1 1 72 72 72.08 72.08 0 0 1-72-72m16 0a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56"></path>
    </svg>
  );
};
