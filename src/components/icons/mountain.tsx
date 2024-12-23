import { cn } from "@/lib/utils";

interface MountainIconProps {
  className?: string;
}

export const MountainIcon = ({ className }: MountainIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 256 256"
      className={cn("fill-current", className)}
    >
      <path d="m254.88 195.92-54.56-92.08A15.87 15.87 0 0 0 186.55 96a15.85 15.85 0 0 0-13.76 7.84l-15.64 26.39a4 4 0 0 0 0 4.07l26.8 45.47a8.13 8.13 0 0 1-1.89 10.55 8 8 0 0 1-11.8-2.26L101.79 71.88a16 16 0 0 0-27.58 0L1.11 195.94a8 8 0 0 0 1 9.52A8.23 8.23 0 0 0 8.23 208h239.54a8.3 8.3 0 0 0 6.09-2.55 8 8 0 0 0 1.02-9.53M64.43 120 88 80l23.57 40ZM140 52a24 24 0 1 1 24 24 24 24 0 0 1-24-24"></path>
    </svg>
  );
};