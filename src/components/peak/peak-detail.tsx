import { ReactNode } from "react";

interface PeakDetailProps {
  icon: ReactNode;
  value: number;
  unit: string;
}

export const PeakDetail = ({ icon, value, unit }: PeakDetailProps) => {
  return (
    <div className="flex items-center gap-x-2.5 font-semibold text-branding-green">
      {icon}
      <p>
        <span>{value}</span>
        <span className="ml-1 text-sm font-normal">{unit}</span>
      </p>
    </div>
  );
};
