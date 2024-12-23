import { cn } from "@/lib/utils";

interface CloudIconProps {
  className?: string;
}

export const CloudIcon = ({ className }: CloudIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 256 256"
      className={cn("fill-current", className)}
    >
      <path d="M160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.5 87.5 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27 8 8 0 0 1-8.57-8 103.7 103.7 0 0 1 5.34-32.92 4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48C246.11 77.54 207.07 40 160.06 40"></path>
    </svg>
  );
};