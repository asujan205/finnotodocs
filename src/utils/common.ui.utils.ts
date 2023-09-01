import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function IsFunction(data: unknown): data is Function {
  return typeof data === "function";
}

export function IsUndefined(value: unknown): value is undefined {
  return typeof value === "undefined";
}
