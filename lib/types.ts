export type YachtStatus = "available" | "booked" | "maintenance";
export type BookingStatus = "confirmed" | "pending" | "completed" | "cancelled";

export interface Yacht {
  id: string;
  name: string;
  type: string;
  length: number; // meters
  cabins: number;
  berths: number;
  year: number;
  pricePerDay: number;
  homePort: string;
  description: string;
  highlights: string[];
  specs: Record<string, string>;
  images: string[];
  status: YachtStatus;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  nationality: string;
  totalBookings: number;
  totalSpent: number;
  lastBooking: string;
  notes: string;
}

export interface Booking {
  id: string;
  yachtId: string;
  customerId: string;
  startDate: string;
  endDate: string;
  days: number;
  totalPrice: number;
  status: BookingStatus;
  extras: string[];
  depositPaid: boolean;
  contractSigned: boolean;
  notes: string;
  createdAt: string;
}
