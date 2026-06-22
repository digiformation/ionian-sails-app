import { getBooking, getCustomer, getYacht } from "@/lib/data";
import { formatCurrency, formatDate, statusColor } from "@/lib/utils";
import { ArrowLeft, CheckCircle2, XCircle, Ship, User, FileText } from "lucide-react";
import { notFound } from "next/navigation";

export default async function BookingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const booking = getBooking(id);
  if (!booking) notFound();
  const customer = getCustomer(booking.customerId)!;
  const yacht = getYacht(booking.yachtId)!;

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <a href="/dashboard/bookings" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to bookings
      </a>

      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Booking {booking.id}</h1>
          <p className="text-slate-500 text-sm mt-1">Created {formatDate(booking.createdAt)}</p>
        </div>
        <span className={`px-3 py-1.5 rounded-full text-sm font-medium capitalize ${statusColor(booking.status)}`}>{booking.status}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Customer */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <User className="w-4 h-4 text-slate-400" />
            <h2 className="font-semibold text-slate-800">Customer</h2>
          </div>
          <p className="font-medium text-slate-900 mb-1">{customer.name}</p>
          <p className="text-sm text-slate-500 mb-0.5">{customer.email}</p>
          <p className="text-sm text-slate-500 mb-3">{customer.phone}</p>
          <p className="text-xs text-slate-400">{customer.nationality} · {customer.totalBookings} bookings total</p>
          {customer.notes && <p className="text-xs text-slate-500 bg-slate-50 rounded-lg p-3 mt-3">{customer.notes}</p>}
          <a href={`/dashboard/customers/${customer.id}`} className="text-xs text-[oklch(0.46_0.18_220)] mt-3 inline-block hover:underline">View customer profile →</a>
        </div>

        {/* Yacht */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <Ship className="w-4 h-4 text-slate-400" />
            <h2 className="font-semibold text-slate-800">Vessel</h2>
          </div>
          <p className="font-medium text-slate-900 mb-1">{yacht.name}</p>
          <p className="text-sm text-slate-500 mb-0.5">{yacht.type}</p>
          <p className="text-sm text-slate-500 mb-3">Home port: {yacht.homePort}</p>
          <p className="text-xs text-slate-400">{yacht.cabins} cabins · {yacht.berths} berths · {yacht.length}m</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Charter details */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <h2 className="font-semibold text-slate-800 mb-4">Charter details</h2>
          <div className="space-y-3 text-sm">
            {[
              ["Departure", formatDate(booking.startDate)],
              ["Return", formatDate(booking.endDate)],
              ["Duration", `${booking.days} days`],
              ["Total price", formatCurrency(booking.totalPrice)],
              ["Extras", booking.extras.length > 0 ? booking.extras.join(", ") : "None"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-slate-50 pb-2">
                <span className="text-slate-500">{label}</span>
                <span className="font-medium text-slate-800">{value}</span>
              </div>
            ))}
          </div>
          {booking.notes && <p className="text-xs text-slate-500 bg-amber-50 border border-amber-100 rounded-lg p-3 mt-4">{booking.notes}</p>}
        </div>

        {/* Admin checklist */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-4 h-4 text-slate-400" />
            <h2 className="font-semibold text-slate-800">Admin checklist</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: "Deposit received", done: booking.depositPaid },
              { label: "Contract signed", done: booking.contractSigned },
              { label: "Briefing pack sent", done: booking.status === "completed" },
              { label: "Post-charter review", done: booking.status === "completed" },
            ].map(({ label, done }) => (
              <div key={label} className="flex items-center gap-3">
                {done ? <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> : <XCircle className="w-4 h-4 text-slate-300 shrink-0" />}
                <span className={`text-sm ${done ? "text-slate-700" : "text-slate-400"}`}>{label}</span>
                {!done && <button className="ml-auto text-xs text-[oklch(0.46_0.18_220)] bg-[oklch(0.94_0.05_220)] px-2.5 py-1 rounded-full hover:opacity-80 transition-opacity">Action</button>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
