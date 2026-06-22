import { CustomerNavbar } from "@/components/customer/navbar";
import { getYacht } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

const extras = [
  { id: "skipper", label: "Skipper", price: 150, desc: "Certified professional skipper, full day" },
  { id: "hostess", label: "Hostess", price: 120, desc: "Catering and on-board service" },
  { id: "provisioning", label: "Provisioning", price: 80, desc: "Grocery pack for the full charter" },
  { id: "transfer", label: "Airport transfer", price: 60, desc: "Return transfers from/to airport" },
];

export default async function BookingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const yacht = getYacht(id);
  if (!yacht) notFound();
  if (yacht.status !== "available") notFound();

  const weekPrice = yacht.pricePerDay * 7;

  return (
    <div className="min-h-screen bg-slate-50">
      <CustomerNavbar />
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <a href={`/fleet/${yacht.id}`} className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to {yacht.name}
        </a>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">Book {yacht.name}</h1>

            {/* Dates */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <h2 className="font-semibold text-slate-800 mb-4">Charter dates</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5">Departure</label>
                  <input type="date" className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.46_0.18_220)] focus:border-transparent" defaultValue="2025-09-27" />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5">Return</label>
                  <input type="date" className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.46_0.18_220)] focus:border-transparent" defaultValue="2025-10-04" />
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-3">Check-in: 17:00 · Check-out: 09:00 · Minimum 7 days</p>
            </div>

            {/* Extras */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <h2 className="font-semibold text-slate-800 mb-4">Add-ons</h2>
              <div className="space-y-3">
                {extras.map((extra) => (
                  <label key={extra.id} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-[oklch(0.46_0.18_220)] cursor-pointer transition-colors group">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="rounded accent-[oklch(0.46_0.18_220)]" />
                      <div>
                        <p className="text-sm font-medium text-slate-800">{extra.label}</p>
                        <p className="text-xs text-slate-400">{extra.desc}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">+{formatCurrency(extra.price)}/day</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Guest details */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <h2 className="font-semibold text-slate-800 mb-4">Your details</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "First name", placeholder: "James" },
                  { label: "Last name", placeholder: "Whitfield" },
                  { label: "Email", placeholder: "james@example.com" },
                  { label: "Phone", placeholder: "+44 7911 000000" },
                  { label: "Nationality", placeholder: "British" },
                  { label: "Sailing experience", placeholder: "e.g. ICC holder, 500nm" },
                ].map(({ label, placeholder }) => (
                  <div key={label} className={label === "Sailing experience" ? "col-span-2" : ""}>
                    <label className="block text-xs text-slate-500 mb-1.5">{label}</label>
                    <input type="text" placeholder={placeholder} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.46_0.18_220)] focus:border-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 sticky top-24">
              <h2 className="font-semibold text-slate-900 mb-4">Booking summary</h2>
              <div className="h-24 bg-gradient-to-br from-[oklch(0.46_0.18_220)] to-[oklch(0.22_0.12_255)] rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">{yacht.name}</span>
              </div>
              <p className="text-sm text-slate-500 mb-4">{yacht.type} · {yacht.homePort}</p>
              <div className="space-y-2 text-sm border-t border-slate-100 pt-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-slate-500">7 nights × {formatCurrency(yacht.pricePerDay)}</span>
                  <span className="font-medium">{formatCurrency(weekPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Add-ons</span>
                  <span className="font-medium">—</span>
                </div>
                <div className="flex justify-between text-base font-semibold border-t border-slate-100 pt-3 mt-2">
                  <span>Total</span>
                  <span className="text-[oklch(0.46_0.18_220)]">{formatCurrency(weekPrice)}</span>
                </div>
              </div>
              <div className="text-xs text-slate-400 space-y-1 mb-5">
                <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500" />30% deposit to confirm</p>
                <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500" />Digital contract via email</p>
                <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500" />Free cancellation before 60 days</p>
              </div>
              <a
                href="/booking-confirmation"
                className="block w-full text-center bg-[oklch(0.46_0.18_220)] text-white py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Confirm booking
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
