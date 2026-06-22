import { yachts, getBookingsForYacht } from "@/lib/data";
import { formatCurrency, formatDate, statusColor } from "@/lib/utils";
import { Ship, Ruler, BedDouble, MapPin, Wrench } from "lucide-react";

export default function FleetDashboardPage() {
  return (
    <div className="p-6 lg:p-8 max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Fleet</h1>
          <p className="text-slate-500 text-sm mt-1">{yachts.length} vessels · {yachts.filter((y) => y.status === "available").length} available</p>
        </div>
      </div>

      <div className="grid gap-4">
        {yachts.map((yacht) => {
          const yachtBookings = getBookingsForYacht(yacht.id).filter((b) => b.status === "confirmed");
          return (
            <div key={yacht.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 h-32 md:h-auto bg-gradient-to-br from-[oklch(0.46_0.18_220)] to-[oklch(0.22_0.12_255)] flex items-center justify-center shrink-0">
                  <Ship className="w-10 h-10 text-white/30" />
                </div>
                <div className="flex-1 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">{yacht.name}</h3>
                      <p className="text-sm text-slate-500 flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3" />{yacht.homePort} · {yacht.type}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-slate-700">{formatCurrency(yacht.pricePerDay)}/day</span>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColor(yacht.status)}`}>{yacht.status}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-5 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1"><Ruler className="w-3 h-3" />{yacht.length}m</span>
                    <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" />{yacht.cabins} cabins · {yacht.berths} berths</span>
                    <span>Built {yacht.year}</span>
                  </div>
                  {yachtBookings.length > 0 ? (
                    <div>
                      <p className="text-xs text-slate-400 mb-2">Upcoming bookings</p>
                      <div className="flex flex-wrap gap-2">
                        {yachtBookings.map((b) => (
                          <a key={b.id} href={`/dashboard/bookings/${b.id}`} className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors">
                            {formatDate(b.startDate)} → {formatDate(b.endDate)}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400">No upcoming bookings</p>
                  )}
                  {yacht.status === "maintenance" && (
                    <div className="flex items-center gap-1.5 text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg mt-3 w-fit">
                      <Wrench className="w-3.5 h-3.5" /> Scheduled maintenance — check notes
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
