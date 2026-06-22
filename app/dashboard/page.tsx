import { bookings, customers, yachts, revenueByMonth } from "@/lib/data";
import { formatCurrency, formatDate, statusColor } from "@/lib/utils";
import { Ship, CalendarCheck, Users, TrendingUp, AlertCircle } from "lucide-react";

const totalRevenue = bookings.filter((b) => b.status === "completed").reduce((s, b) => s + b.totalPrice, 0);
const confirmedBookings = bookings.filter((b) => b.status === "confirmed").length;
const pendingBookings = bookings.filter((b) => b.status === "pending").length;
const availableYachts = yachts.filter((y) => y.status === "available").length;
const maxRevenue = Math.max(...revenueByMonth.map((m) => m.revenue));
const recentBookings = [...bookings].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 5);

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Overview</h1>
        <p className="text-slate-500 text-sm mt-1">Season 2025 · Ionian Islands</p>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Season revenue", value: formatCurrency(totalRevenue), icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Confirmed ahead", value: confirmedBookings, icon: CalendarCheck, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Fleet available", value: `${availableYachts} / ${yachts.length}`, icon: Ship, color: "text-violet-600", bg: "bg-violet-50" },
          { label: "Pending action", value: pendingBookings, icon: AlertCircle, color: "text-amber-600", bg: "bg-amber-50" },
        ].map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="bg-white rounded-2xl p-5 border border-slate-100">
            <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center mb-3`}>
              <Icon className={`w-4 h-4 ${color}`} />
            </div>
            <p className="text-2xl font-bold text-slate-900">{value}</p>
            <p className="text-xs text-slate-500 mt-1">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* Revenue chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100">
          <h2 className="font-semibold text-slate-900 mb-4">Revenue by month</h2>
          <div className="flex items-end gap-1.5 h-36">
            {revenueByMonth.map(({ month, revenue }) => (
              <div key={month} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-sm bg-[oklch(0.46_0.18_220)]"
                  style={{ height: `${maxRevenue ? (revenue / maxRevenue) * 100 : 0}%`, minHeight: revenue > 0 ? "4px" : "0" }}
                />
                <span className="text-[10px] text-slate-400">{month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet status */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100">
          <h2 className="font-semibold text-slate-900 mb-4">Fleet status</h2>
          <div className="space-y-3">
            {yachts.map((y) => (
              <div key={y.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Ship className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-sm text-slate-700">{y.name}</span>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${statusColor(y.status)}`}>{y.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent bookings */}
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-900">Recent bookings</h2>
          <a href="/dashboard/bookings" className="text-xs text-[oklch(0.46_0.18_220)] hover:underline">View all</a>
        </div>
        <div className="divide-y divide-slate-50">
          {recentBookings.map((b) => {
            const yacht = yachts.find((y) => y.id === b.yachtId)!;
            const customer = customers.find((c) => c.id === b.customerId)!;
            return (
              <a key={b.id} href={`/dashboard/bookings/${b.id}`} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-slate-800">{customer.name} — {yacht.name}</p>
                  <p className="text-xs text-slate-400">{formatDate(b.startDate)} → {formatDate(b.endDate)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-slate-700">{formatCurrency(b.totalPrice)}</span>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium capitalize ${statusColor(b.status)}`}>{b.status}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
