import { CustomerNavbar } from "@/components/customer/navbar";
import { yachts } from "@/lib/data";
import { formatCurrency, statusColor } from "@/lib/utils";
import { Anchor, Users, BedDouble, Ruler } from "lucide-react";

export default function FleetPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <CustomerNavbar />
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-16">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Our Fleet</h1>
          <p className="text-slate-500">6 vessels available across the Ionian Islands. Bareboat or skippered.</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {["All", "Sailing Yacht", "Motor Yacht", "Catamaran"].map((f) => (
            <button key={f} className={`px-4 py-2 rounded-full text-sm border transition-colors ${f === "All" ? "bg-[oklch(0.46_0.18_220)] text-white border-transparent" : "bg-white border-slate-200 text-slate-600 hover:border-slate-400"}`}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {yachts.map((yacht) => (
            <a key={yacht.id} href={`/fleet/${yacht.id}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-0.5">
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-[oklch(0.46_0.18_220)] to-[oklch(0.22_0.12_255)] flex items-center justify-center relative">
                <Anchor className="w-12 h-12 text-white/30" />
                <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColor(yacht.status)}`}>
                  {yacht.status}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-semibold text-slate-900 text-lg">{yacht.name}</h3>
                  <span className="text-sm font-semibold text-[oklch(0.46_0.18_220)]">{formatCurrency(yacht.pricePerDay)}<span className="text-xs font-normal text-slate-400">/day</span></span>
                </div>
                <p className="text-xs text-slate-500 mb-3">{yacht.type} · {yacht.homePort}</p>
                <div className="flex gap-4 text-xs text-slate-600 mb-4">
                  <span className="flex items-center gap-1"><Ruler className="w-3 h-3" />{yacht.length}m</span>
                  <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" />{yacht.cabins} cabins</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{yacht.berths} berths</span>
                </div>
                <span className={`inline-block text-xs px-3 py-1.5 rounded-full font-medium w-full text-center transition-colors ${yacht.status === "available" ? "bg-[oklch(0.46_0.18_220)] text-white group-hover:bg-[oklch(0.40_0.18_220)]" : "bg-slate-100 text-slate-400 cursor-not-allowed"}`}>
                  {yacht.status === "available" ? "View & Book" : yacht.status === "booked" ? "Currently Booked" : "In Maintenance"}
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
