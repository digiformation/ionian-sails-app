import type { Yacht, Customer, Booking } from "./types";

export const yachts: Yacht[] = [
  {
    id: "calypso",
    name: "Calypso",
    type: "Sailing Yacht",
    length: 14,
    cabins: 3,
    berths: 6,
    year: 2019,
    pricePerDay: 480,
    homePort: "Piraeus",
    description: "A beautifully maintained Sun Odyssey 440 offering comfortable blue-water cruising. Perfect for families or groups seeking a balance of performance and comfort across the Ionian Islands.",
    highlights: ["Air conditioning", "Watermaker", "Bow thruster", "Full cockpit enclosure"],
    specs: {
      "Builder": "Jeanneau",
      "Model": "Sun Odyssey 440",
      "Length": "14.0 m",
      "Beam": "4.5 m",
      "Draft": "2.1 m",
      "Engine": "Volvo 57hp",
      "Fuel capacity": "200 L",
      "Water capacity": "400 L",
    },
    images: ["/images/calypso-1.jpg"],
    status: "available",
  },
  {
    id: "poseidon",
    name: "Poseidon",
    type: "Motor Yacht",
    length: 12,
    cabins: 2,
    berths: 4,
    year: 2021,
    pricePerDay: 650,
    homePort: "Lefkada",
    description: "A sleek Cranchi E26 with twin Volvo engines, ideal for day charters and island hopping with speed and style. Air-conditioned throughout with a spacious sun deck.",
    highlights: ["Twin engines", "Sun deck", "Swim platform", "Bimini top"],
    specs: {
      "Builder": "Cranchi",
      "Model": "E26 Classic",
      "Length": "12.0 m",
      "Beam": "3.8 m",
      "Max speed": "28 knots",
      "Engines": "2x Volvo 150hp",
      "Fuel capacity": "450 L",
      "Water capacity": "200 L",
    },
    images: ["/images/poseidon-1.jpg"],
    status: "available",
  },
  {
    id: "iris",
    name: "Iris",
    type: "Catamaran",
    length: 13,
    cabins: 4,
    berths: 8,
    year: 2020,
    pricePerDay: 820,
    homePort: "Corfu",
    description: "A Leopard 40 catamaran offering exceptional stability and living space. Four private cabins make her ideal for two couples or a larger family. Shallow draft allows anchoring in secluded bays.",
    highlights: ["Trampoline net", "Shallow draft", "Generator", "Deck shower"],
    specs: {
      "Builder": "Leopard",
      "Model": "40",
      "Length": "12.5 m",
      "Beam": "6.8 m",
      "Draft": "1.0 m",
      "Engine": "2x Yanmar 29hp",
      "Fuel capacity": "300 L",
      "Water capacity": "600 L",
    },
    images: ["/images/iris-1.jpg"],
    status: "booked",
  },
  {
    id: "apollo",
    name: "Apollo",
    type: "Sailing Yacht",
    length: 16,
    cabins: 4,
    berths: 8,
    year: 2018,
    pricePerDay: 560,
    homePort: "Preveza",
    description: "A powerful Beneteau Oceanis 46 with a performance sail plan and proven offshore capability. Four cabins with two heads make her ideal for larger groups exploring the Ionian and Adriatic.",
    highlights: ["Sprayhood", "Davits", "Self-tacking jib", "Electric winches"],
    specs: {
      "Builder": "Beneteau",
      "Model": "Oceanis 46",
      "Length": "14.4 m",
      "Beam": "4.5 m",
      "Draft": "2.2 m",
      "Engine": "Yanmar 54hp",
      "Fuel capacity": "230 L",
      "Water capacity": "450 L",
    },
    images: ["/images/apollo-1.jpg"],
    status: "available",
  },
  {
    id: "selene",
    name: "Selene",
    type: "Sailing Yacht",
    length: 11,
    cabins: 2,
    berths: 4,
    year: 2022,
    pricePerDay: 320,
    homePort: "Kefalonia",
    description: "A nimble Bavaria 34 — the ideal bareboat for experienced sailors. Light, responsive, and economical. Perfect for couples or a small group wanting to go where larger yachts can't.",
    highlights: ["Roller furling", "Autopilot", "Outboard dinghy", "Life raft"],
    specs: {
      "Builder": "Bavaria",
      "Model": "34 Cruiser",
      "Length": "10.6 m",
      "Beam": "3.6 m",
      "Draft": "1.9 m",
      "Engine": "Volvo 30hp",
      "Fuel capacity": "120 L",
      "Water capacity": "250 L",
    },
    images: ["/images/selene-1.jpg"],
    status: "available",
  },
  {
    id: "triton",
    name: "Triton",
    type: "Motor Yacht",
    length: 18,
    cabins: 3,
    berths: 6,
    year: 2017,
    pricePerDay: 1100,
    homePort: "Zakynthos",
    description: "A Sunseeker Manhattan 54 in exceptional condition. Three luxurious ensuite cabins, a full flybridge, and twin 450hp engines for fast, comfortable cruising between the Ionian islands.",
    highlights: ["Flybridge", "Jacuzzi", "Jet ski garage", "Crew cabin"],
    specs: {
      "Builder": "Sunseeker",
      "Model": "Manhattan 54",
      "Length": "16.5 m",
      "Beam": "4.8 m",
      "Max speed": "32 knots",
      "Engines": "2x IPS 600",
      "Fuel capacity": "1800 L",
      "Water capacity": "500 L",
    },
    images: ["/images/triton-1.jpg"],
    status: "maintenance",
  },
];

export const customers: Customer[] = [
  { id: "c1", name: "James Whitfield", email: "james.whitfield@outlook.com", phone: "+44 7911 123456", nationality: "British", totalBookings: 3, totalSpent: 7240, lastBooking: "2025-08-12", notes: "Experienced sailor. Prefers sailing yachts. Always requests the skipper briefing pack in advance." },
  { id: "c2", name: "Sophie Müller", email: "sophie.mueller@gmail.com", phone: "+49 151 23456789", nationality: "German", totalBookings: 1, totalSpent: 2460, lastBooking: "2025-07-03", notes: "First charter. Requested extra safety equipment. Gave 5-star review." },
  { id: "c3", name: "Marco Ferretti", email: "marco.ferretti@libero.it", phone: "+39 347 1234567", nationality: "Italian", totalBookings: 5, totalSpent: 18900, lastBooking: "2025-09-01", notes: "VIP client. Always books Iris or Triton. Requests flowers on arrival." },
  { id: "c4", name: "Nikos Papadopoulos", email: "nikos.p@gmail.com", phone: "+30 697 1234567", nationality: "Greek", totalBookings: 2, totalSpent: 4320, lastBooking: "2025-06-20", notes: "Local client. Books shoulder season. Interested in Ionian extended cruises." },
  { id: "c5", name: "Emma Thornton", email: "emma.thornton@hotmail.co.uk", phone: "+44 7700 900456", nationality: "British", totalBookings: 1, totalSpent: 3280, lastBooking: "2025-08-28", notes: "Booked for honeymoon. Requested champagne and flowers." },
  { id: "c6", name: "Lars Eriksson", email: "lars.eriksson@gmail.com", phone: "+46 70 1234567", nationality: "Swedish", totalBookings: 4, totalSpent: 12400, lastBooking: "2025-07-19", notes: "Experienced skipper. Prefers catamarans. Early booker — usually books in January." },
  { id: "c7", name: "Chloe Dubois", email: "chloe.dubois@sfr.fr", phone: "+33 6 12 34 56 78", nationality: "French", totalBookings: 2, totalSpent: 5760, lastBooking: "2025-08-05", notes: "Corporate booking. Requires invoice and VAT receipts." },
  { id: "c8", name: "Alex Stavros", email: "alex.stavros@yahoo.com", phone: "+30 694 8765432", nationality: "Greek", totalBookings: 1, totalSpent: 1920, lastBooking: "2025-05-15", notes: "Rented Selene for a weekend. Left very good condition." },
];

export const bookings: Booking[] = [
  { id: "b001", yachtId: "calypso", customerId: "c1", startDate: "2025-07-12", endDate: "2025-07-19", days: 7, totalPrice: 3360, status: "completed", extras: ["Skipper", "Provisioning"], depositPaid: true, contractSigned: true, notes: "", createdAt: "2025-04-20" },
  { id: "b002", yachtId: "iris", customerId: "c3", startDate: "2025-08-01", endDate: "2025-08-15", days: 14, totalPrice: 11480, status: "completed", extras: ["Skipper", "Hostess", "Provisioning", "Airport transfer"], depositPaid: true, contractSigned: true, notes: "VIP — flowers and champagne on arrival.", createdAt: "2025-02-10" },
  { id: "b003", yachtId: "apollo", customerId: "c6", startDate: "2025-07-19", endDate: "2025-07-26", days: 7, totalPrice: 3920, status: "completed", extras: ["Provisioning"], depositPaid: true, contractSigned: true, notes: "", createdAt: "2025-01-15" },
  { id: "b004", yachtId: "selene", customerId: "c4", startDate: "2025-06-20", endDate: "2025-06-27", days: 7, totalPrice: 2240, status: "completed", extras: [], depositPaid: true, contractSigned: true, notes: "", createdAt: "2025-04-02" },
  { id: "b005", yachtId: "poseidon", customerId: "c7", startDate: "2025-08-03", endDate: "2025-08-10", days: 7, totalPrice: 4550, status: "completed", extras: ["Skipper", "Airport transfer"], depositPaid: true, contractSigned: true, notes: "Invoice required.", createdAt: "2025-05-18" },
  { id: "b006", yachtId: "calypso", customerId: "c2", startDate: "2025-07-03", endDate: "2025-07-10", days: 7, totalPrice: 3360, status: "completed", extras: ["Provisioning"], depositPaid: true, contractSigned: true, notes: "", createdAt: "2025-03-12" },
  { id: "b007", yachtId: "iris", customerId: "c6", startDate: "2025-08-20", endDate: "2025-08-31", days: 11, totalPrice: 9020, status: "confirmed", extras: ["Skipper", "Provisioning"], depositPaid: true, contractSigned: true, notes: "", createdAt: "2025-02-28" },
  { id: "b008", yachtId: "apollo", customerId: "c5", startDate: "2025-08-28", endDate: "2025-09-04", days: 7, totalPrice: 3920, status: "confirmed", extras: ["Skipper", "Provisioning", "Airport transfer"], depositPaid: true, contractSigned: true, notes: "Honeymoon — champagne requested.", createdAt: "2025-06-01" },
  { id: "b009", yachtId: "calypso", customerId: "c3", startDate: "2025-09-01", endDate: "2025-09-08", days: 7, totalPrice: 3360, status: "confirmed", extras: ["Skipper"], depositPaid: true, contractSigned: true, notes: "", createdAt: "2025-05-20" },
  { id: "b010", yachtId: "poseidon", customerId: "c4", startDate: "2025-09-13", endDate: "2025-09-20", days: 7, totalPrice: 4550, status: "pending", extras: [], depositPaid: false, contractSigned: false, notes: "Awaiting deposit.", createdAt: "2025-07-10" },
  { id: "b011", yachtId: "selene", customerId: "c8", startDate: "2025-05-15", endDate: "2025-05-18", days: 3, totalPrice: 960, status: "completed", extras: [], depositPaid: true, contractSigned: true, notes: "", createdAt: "2025-04-30" },
  { id: "b012", yachtId: "apollo", customerId: "c1", startDate: "2025-09-20", endDate: "2025-09-27", days: 7, totalPrice: 3920, status: "confirmed", extras: ["Provisioning"], depositPaid: true, contractSigned: false, notes: "Contract sent, awaiting signature.", createdAt: "2025-07-15" },
];

export function getYacht(id: string) {
  return yachts.find((y) => y.id === id);
}

export function getCustomer(id: string) {
  return customers.find((c) => c.id === id);
}

export function getBooking(id: string) {
  return bookings.find((b) => b.id === id);
}

export function getBookingsForYacht(yachtId: string) {
  return bookings.filter((b) => b.yachtId === yachtId);
}

export function getBookingsForCustomer(customerId: string) {
  return bookings.filter((b) => b.customerId === customerId);
}

export const revenueByMonth = [
  { month: "Jan", revenue: 0 },
  { month: "Feb", revenue: 0 },
  { month: "Mar", revenue: 2400 },
  { month: "Apr", revenue: 4800 },
  { month: "May", revenue: 8960 },
  { month: "Jun", revenue: 12240 },
  { month: "Jul", revenue: 28490 },
  { month: "Aug", revenue: 36530 },
  { month: "Sep", revenue: 15750 },
  { month: "Oct", revenue: 3200 },
  { month: "Nov", revenue: 0 },
  { month: "Dec", revenue: 0 },
];
