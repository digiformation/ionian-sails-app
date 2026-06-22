import { CustomerNavbar } from "@/components/customer/navbar";
import { bookings, getYacht } from "@/lib/data";
import { formatCurrency, formatDate, statusColor } from "@/lib/utils";
import { Anchor, FileText, MessageCircle } from "lucide-react";

const myBookings = bookings.filter((b) => b.customerId === "c1");

export default function MyBookingsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <CustomerNavbar />
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">My Bookings</h1>
        <p className="text-slate-500 mb-8">All your Ionian Sails charters in one place.</p>

        <div className="space-y-4">
          {myBookings.map((booking) => {
            const yacht = getYacht(booking.yachtId)!;
            return (
              <div key={booking.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-32 h-24 sm:h-auto bg-gradient-to-br from-[oklch(0.46_0.18_220)] to-[oklch(0.22_0.12_255)] flex items-center justify-center shrink-0">
                    <Anchor className="w-8 h-8 text-white/40" />
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-slate-900">{yacht.name}</h3>
                        <p className="text-sm text-slate-500">{yacht.type} · {yacht.homePort}</p>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-600 mb-3">
                      <span>{formatDate(booking.startDate)} → {formatDate(booking.endDate)}</span>
                      <span>{booking.days} days</span>
                      <span className="font-semibold text-slate-800">{formatCurrency(booking.totalPrice)}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {booking.contractSigned && (
                        <span className="text-xs flex items-center gap-1 text-slate-500"><FileText className="w-3 h-3" /> Contract signed</span>
                      )}
                      {!booking.contractSigned && booking.status !== "completed" && (
                        <button className="text-xs flex items-center gap-1 text-amber-600 bg-amber-50 px-3 py-1 rounded-full"><FileText className="w-3 h-3" /> Sign contract</button>
                      )}
                      <button className="text-xs flex items-center gap-1 text-slate-500 bg-slate-50 px-3 py-1 rounded-full hover:bg-slate-100 transition-colors"><MessageCircle className="w-3 h-3" /> Contact us</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {myBookings.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <Anchor className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p>No bookings yet.</p>
            <a href="/fleet" className="mt-4 inline-block text-sm text-[oklch(0.46_0.18_220)] hover:underline">Browse the fleet →</a>
          </div>
        )}
      </main>
    </div>
  );
}
