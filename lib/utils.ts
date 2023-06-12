import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getAllIncluded = (arr: any, target: any) => {
  if (arr && arr.length !== 0) {
    return target.every((v: any) => arr.includes(v))
  }
  return
}
