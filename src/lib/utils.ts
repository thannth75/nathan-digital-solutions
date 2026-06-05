import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge tailwind classes safely.
 * Even though we use vanilla CSS for the core design system,
 * this utility is extremely helpful for composing component classes
 * dynamically.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
