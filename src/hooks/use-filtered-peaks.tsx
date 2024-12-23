"use client";

import { useSearchParams } from "next/navigation";

export const useFilteredPeaks = (peaks) => {
  const searchParams = useSearchParams();
  const territories = searchParams.get("territories")?.split(",") || [];

  if (!territories.length) return peaks;

  return peaks.filter((peak) => territories.includes(peak.territory_code));
};
