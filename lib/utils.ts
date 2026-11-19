import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const normalize = (val: any) => {
  if (
    val === undefined ||
    val === null ||
    val === "" ||
    val === "null" ||
    val === "undefined"
  ) {
    return undefined
  }
  return val
}