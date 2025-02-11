import { cn } from "@/lib/utils";

interface WindIconProps {
  className?: string;
}

export const WindIcon = ({ className }: WindIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 256 256"
      className={cn("fill-current", className)}
    >
      <path d="M120 104H24a8 8 0 0 1-8-8.53A8.17 8.17 0 0 1 24.27 88H112a8 8 0 0 0 8-8.53 8.17 8.17 0 0 0-8.27-7.47H92.29a4 4 0 0 1-4-4.58A32 32 0 1 1 120 104m119.92-2.29a32 32 0 0 0-63.59-2.29 4 4 0 0 0 4 4.58h19.44a8.17 8.17 0 0 1 8.25 7.47 8 8 0 0 1-8 8.53H32.27a8.17 8.17 0 0 0-8.27 7.47 8 8 0 0 0 8 8.53h176a32 32 0 0 0 31.92-34.29M152 152H40.27a8.17 8.17 0 0 0-8.27 7.47 8 8 0 0 0 8 8.53h103.73a8.17 8.17 0 0 1 8.25 7.47 8 8 0 0 1-8 8.53h-19.69a4 4 0 0 0-4 4.58A32 32 0 1 0 152 152"></path>
    </svg>
  );
};
