import { bookings, customers, yachts } from "@/lib/data";
import { formatCurrency, formatDate, statusColor } from "@/lib/utils";
import { FileText, AlertCircle } from "lucide-react";

const sorted = [...bookings].sort((a, b) => b.startDate.localeCompare(a.startDate));

export default function BookingsPage() {
  const pending = sorted.filter((b) => b.status === "pending");
  const active = sorted.filter((b) => b.status === "confirmed");
  const past = sorted.filter((b) => b.status === "completed" || b.status === "cancelled");

  return (
    <div className="p-6 lg:p-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Bookings</h1>
        <p className="text-slate-500 text-sm mt-1">{bookings.length} total · {active.length} confirmed · {pending.length} pending action</p>
      </div>

      {pending.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-4 h-4 text-amber-500" />
            <h2 className="font-medium text-slate-800">Needs attention ({pending.length})</h2>
          </div>
          <BookingTable bookings={pending} />
        </div>
      )}

      <div className="mb-6">
        <h2 className="font-medium text-slate-800 mb-3">Confirmed ({active.length})</h2>
        <BookingTable bookings={active} />
      </div>

      <div>
        <h2 className="font-medium text-slate-800 mb-3">Past ({past.length})</h2>
        <BookingTable bookings={past} />
      </div>
    </div>
  );
}

function BookingTable({ bookings: list }: { bookings: typeof bookings }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-xs text-slate-500 text-left">
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Yacht</th>
              <th className="px-5 py-3 font-medium">Dates</th>
              <th className="px-5 py-3 font-medium">Total</th>
              <th className="px-5 py-3 font-medium">Docs</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {list.map((b) => {
              const customer = customers.find((c) => c.id === b.customerId)!;
              const yacht = yachts.find((y) => y.id === b.yachtId)!;
              return (
                <tr key={b.id} className="hover:bg-slate-50 transition-colors cursor-pointer">
                  <td className="px-5 py-4">
                    <a href={`/dashboard/bookings/${b.id}`} className="font-medium text-slate-800 hover:text-[oklch(0.46_0.18_220)]">{customer.name}</a>
                  </td>
                  <td className="px-5 py-4 text-slate-600">{yacht.name}</td>
                  <td className="px-5 py-4 text-slate-500 whitespace-nowrap">{formatDate(b.startDate)} → {formatDate(b.endDate)}</td>
                  <td className="px-5 py-4 font-semibold text-slate-800">{formatCurrency(b.totalPrice)}</td>
                  <td className="px-5 py-4">
                    <div className="flex gap-2">
                      <span title="Deposit" className={`w-2 h-2 rounded-full mt-1 ${b.depositPaid ? "bg-green-500" : "bg-amber-400"}`} />
                      <span title={b.contractSigned ? "Contract signed" : "Contract pending"}><FileText className={`w-4 h-4 ${b.contractSigned ? "text-green-500" : "text-amber-400"}`} /></span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColor(b.status)}`}>{b.status}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
