import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-EU", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(amount);
}

export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export function statusColor(status: string) {
  switch (status) {
    case "confirmed": return "bg-green-100 text-green-800";
    case "pending": return "bg-yellow-100 text-yellow-800";
    case "completed": return "bg-blue-100 text-blue-800";
    case "cancelled": return "bg-red-100 text-red-800";
    case "available": return "bg-green-100 text-green-800";
    case "booked": return "bg-orange-100 text-orange-800";
    case "maintenance": return "bg-gray-100 text-gray-800";
    default: return "bg-gray-100 text-gray-800";
  }
}
