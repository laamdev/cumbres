import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { territories } from "@/data/territories";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getAllIncluded = <T>(
  arr: T[] | undefined,
  target: T[]
): boolean | undefined => {
  if (arr && arr.length !== 0) {
    return target.every((v) => arr.includes(v));
  }
  return;
};

export const getCountyNames = (countyCodes: string[]) => {
  return countyCodes
    ?.map((code) => territories.find((t) => t.code === code)?.county || code)
    .join(" y ");
};

export const getProvinceNames = (provinceCodes: string[]) => {
  return provinceCodes
    .map((provinceCode) => {
      const territory = territories.find((t) =>
        t?.provinces?.some((p) => p.code === provinceCode)
      );

      const province = territory?.provinces?.find(
        (p) => p.code === provinceCode
      );
      return province?.label || provinceCode;
    })
    .join(" y ");
};
