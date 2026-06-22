import { bookings, yachts, revenueByMonth } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { TrendingUp, Ship } from "lucide-react";

const completed = bookings.filter((b) => b.status === "completed");
const confirmed = bookings.filter((b) => b.status === "confirmed");
const totalEarned = completed.reduce((s, b) => s + b.totalPrice, 0);
const totalPipeline = confirmed.reduce((s, b) => s + b.totalPrice, 0);
const maxRevenue = Math.max(...revenueByMonth.map((m) => m.revenue));

const yachtRevenue = yachts.map((y) => ({
  yacht: y,
  revenue: completed.filter((b) => b.yachtId === y.id).reduce((s, b) => s + b.totalPrice, 0),
  bookings: completed.filter((b) => b.yachtId === y.id).length,
})).sort((a, b) => b.revenue - a.revenue);

export default function RevenuePage() {
  return (
    <div className="p-6 lg:p-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Revenue</h1>
        <p className="text-slate-500 text-sm mt-1">Season 2025</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Earned (completed)", value: formatCurrency(totalEarned) },
          { label: "Pipeline (confirmed)", value: formatCurrency(totalPipeline) },
          { label: "Avg booking value", value: formatCurrency(Math.round(totalEarned / (completed.length || 1))) },
          { label: "Bookings completed", value: completed.length },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-2xl p-5 border border-slate-100">
            <p className="text-2xl font-bold text-slate-900">{value}</p>
            <p className="text-xs text-slate-500 mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Monthly chart */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-4 h-4 text-slate-400" />
          <h2 className="font-semibold text-slate-800">Monthly revenue</h2>
        </div>
        <div className="flex items-end gap-2 h-48 mb-2">
          {revenueByMonth.map(({ month, revenue }) => (
            <div key={month} className="flex-1 flex flex-col items-center gap-1.5">
              {revenue > 0 && (
                <span className="text-[10px] text-slate-500 font-medium">{formatCurrency(revenue / 1000)}k</span>
              )}
              <div
                className="w-full rounded-t bg-[oklch(0.46_0.18_220)]"
                style={{ height: `${maxRevenue ? (revenue / maxRevenue) * 100 : 0}%`, minHeight: revenue > 0 ? "6px" : "0" }}
              />
              <span className="text-[10px] text-slate-400">{month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue by yacht */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-slate-100">
          <Ship className="w-4 h-4 text-slate-400" />
          <h2 className="font-semibold text-slate-800">Revenue by vessel</h2>
        </div>
        <div className="divide-y divide-slate-50">
          {yachtRevenue.map(({ yacht, revenue, bookings: count }) => (
            <div key={yacht.id} className="flex items-center gap-4 px-6 py-4">
              <div className="flex-1">
                <p className="font-medium text-slate-800">{yacht.name}</p>
                <p className="text-xs text-slate-400">{yacht.type} · {count} charters</p>
              </div>
              <div className="flex-1 mx-4">
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[oklch(0.46_0.18_220)]"
                    style={{ width: `${totalEarned ? (revenue / totalEarned) * 100 : 0}%` }}
                  />
                </div>
              </div>
              <p className="font-semibold text-slate-800 w-24 text-right">{formatCurrency(revenue)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
