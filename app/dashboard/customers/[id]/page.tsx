import { getCustomer, getBookingsForCustomer, getYacht } from "@/lib/data";
import { formatCurrency, formatDate, statusColor } from "@/lib/utils";
import { ArrowLeft, Mail, Phone, Globe, Star, Ship } from "lucide-react";
import { notFound } from "next/navigation";

export default async function CustomerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const customer = getCustomer(id);
  if (!customer) notFound();
  const cBookings = getBookingsForCustomer(id);

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <a href="/dashboard/customers" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to customers
      </a>

      <div className="flex items-start gap-5 mb-8">
        <div className="w-16 h-16 rounded-2xl bg-[oklch(0.94_0.05_220)] flex items-center justify-center text-[oklch(0.46_0.18_220)] font-bold text-2xl shrink-0">
          {customer.name.charAt(0)}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            {customer.name}
            {customer.totalBookings >= 3 && <Star className="w-5 h-5 text-amber-400 fill-amber-400" />}
          </h1>
          <p className="text-slate-500 text-sm">{customer.nationality}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total bookings", value: customer.totalBookings },
          { label: "Total spent", value: formatCurrency(customer.totalSpent) },
          { label: "Last charter", value: formatDate(customer.lastBooking) },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-2xl p-5 border border-slate-100 text-center">
            <p className="text-2xl font-bold text-slate-900">{value}</p>
            <p className="text-xs text-slate-500 mt-1">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Contact */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <h2 className="font-semibold text-slate-800 mb-4">Contact details</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 text-slate-600"><Mail className="w-4 h-4 text-slate-400" />{customer.email}</div>
            <div className="flex items-center gap-3 text-slate-600"><Phone className="w-4 h-4 text-slate-400" />{customer.phone}</div>
            <div className="flex items-center gap-3 text-slate-600"><Globe className="w-4 h-4 text-slate-400" />{customer.nationality}</div>
          </div>
          {customer.notes && (
            <div className="mt-4 bg-slate-50 rounded-xl p-3">
              <p className="text-xs font-medium text-slate-500 mb-1">Notes</p>
              <p className="text-sm text-slate-700">{customer.notes}</p>
            </div>
          )}
        </div>

        {/* Charter history */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <h2 className="font-semibold text-slate-800 mb-4">Charter history</h2>
          <div className="space-y-3">
            {cBookings.map((b) => {
              const yacht = getYacht(b.yachtId)!;
              return (
                <a key={b.id} href={`/dashboard/bookings/${b.id}`} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                    <Ship className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 group-hover:text-[oklch(0.46_0.18_220)] truncate">{yacht.name}</p>
                    <p className="text-xs text-slate-400">{formatDate(b.startDate)} · {b.days} days</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-semibold text-slate-700">{formatCurrency(b.totalPrice)}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${statusColor(b.status)}`}>{b.status}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
