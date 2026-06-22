import { CustomerNavbar } from "@/components/customer/navbar";
import { getYacht } from "@/lib/data";
import { formatCurrency, statusColor } from "@/lib/utils";
import { Anchor, ArrowLeft, Users, BedDouble, Ruler, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

export default async function YachtDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const yacht = getYacht(id);
  if (!yacht) notFound();

  return (
    <div className="min-h-screen bg-slate-50">
      <CustomerNavbar />
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-16">
        <a href="/fleet" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to fleet
        </a>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero image */}
            <div className="h-72 lg:h-96 bg-gradient-to-br from-[oklch(0.46_0.18_220)] to-[oklch(0.22_0.12_255)] rounded-2xl flex items-center justify-center relative overflow-hidden">
              <Anchor className="w-20 h-20 text-white/20" />
              <span className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium capitalize ${statusColor(yacht.status)}`}>
                {yacht.status}
              </span>
            </div>

            {/* Info */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">{yacht.name}</h1>
                  <p className="text-slate-500 flex items-center gap-1 mt-1"><MapPin className="w-3.5 h-3.5" />{yacht.homePort} · {yacht.type} · {yacht.year}</p>
                </div>
                <p className="text-xl font-bold text-[oklch(0.46_0.18_220)]">{formatCurrency(yacht.pricePerDay)}<span className="text-sm font-normal text-slate-400">/day</span></p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">{yacht.description}</p>
              <div className="flex flex-wrap gap-2">
                {yacht.highlights.map((h) => (
                  <span key={h} className="flex items-center gap-1.5 text-xs bg-[oklch(0.94_0.05_220)] text-[oklch(0.35_0.14_220)] px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />{h}
                  </span>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <h2 className="font-semibold text-slate-900 mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(yacht.specs).map(([k, v]) => (
                  <div key={k} className="flex justify-between py-2 border-b border-slate-50 text-sm">
                    <span className="text-slate-500">{k}</span>
                    <span className="font-medium text-slate-800">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking card */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 sticky top-24">
              <h2 className="font-semibold text-slate-900 mb-4">Quick facts</h2>
              <div className="space-y-3 mb-6">
                {[
                  { icon: Ruler, label: "Length", value: `${yacht.length}m` },
                  { icon: BedDouble, label: "Cabins", value: `${yacht.cabins} cabins · ${yacht.berths} berths` },
                  { icon: Users, label: "Max guests", value: `${yacht.berths} people` },
                  { icon: Calendar, label: "Built", value: yacht.year.toString() },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-slate-500"><Icon className="w-4 h-4" />{label}</span>
                    <span className="font-medium text-slate-800">{value}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-4 mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">Price per day</span>
                  <span className="font-semibold">{formatCurrency(yacht.pricePerDay)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Minimum charter</span>
                  <span className="font-medium">7 days</span>
                </div>
              </div>

              {yacht.status === "available" ? (
                <a
                  href={`/book/${yacht.id}`}
                  className="block w-full text-center bg-[oklch(0.46_0.18_220)] text-white py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
                >
                  Book this yacht
                </a>
              ) : (
                <button disabled className="block w-full text-center bg-slate-100 text-slate-400 py-3 rounded-xl font-medium cursor-not-allowed">
                  {yacht.status === "booked" ? "Currently booked" : "In maintenance"}
                </button>
              )}
              <p className="text-xs text-slate-400 text-center mt-3">Free cancellation up to 60 days before departure</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
