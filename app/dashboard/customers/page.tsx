import { customers } from "@/lib/data";
import { formatCurrency, formatDate } from "@/lib/utils";
import { Users, Star } from "lucide-react";

export default function CustomersPage() {
  const sorted = [...customers].sort((a, b) => b.totalSpent - a.totalSpent);
  return (
    <div className="p-6 lg:p-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Customers</h1>
        <p className="text-slate-500 text-sm mt-1">{customers.length} contacts · {customers.filter((c) => c.totalBookings >= 3).length} returning</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-xs text-slate-500 text-left">
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Contact</th>
                <th className="px-5 py-3 font-medium">Bookings</th>
                <th className="px-5 py-3 font-medium">Total spent</th>
                <th className="px-5 py-3 font-medium">Last charter</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {sorted.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4">
                    <a href={`/dashboard/customers/${c.id}`} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[oklch(0.94_0.05_220)] flex items-center justify-center text-[oklch(0.46_0.18_220)] font-medium text-sm shrink-0">
                        {c.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 hover:text-[oklch(0.46_0.18_220)] flex items-center gap-1.5">
                          {c.name}
                          {c.totalBookings >= 3 && <Star className="w-3 h-3 text-amber-400 fill-amber-400" />}
                        </p>
                        <p className="text-xs text-slate-400">{c.nationality}</p>
                      </div>
                    </a>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-slate-600">{c.email}</p>
                    <p className="text-xs text-slate-400">{c.phone}</p>
                  </td>
                  <td className="px-5 py-4 text-slate-700">{c.totalBookings}</td>
                  <td className="px-5 py-4 font-semibold text-slate-800">{formatCurrency(c.totalSpent)}</td>
                  <td className="px-5 py-4 text-slate-500">{formatDate(c.lastBooking)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
