import { Anchor, ArrowRight, Users, LayoutDashboard } from "lucide-react";

export default function EntryPage() {
  return (
    <main className="min-h-screen bg-[oklch(0.22_0.12_255)] flex flex-col items-center justify-center px-4">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Anchor className="w-8 h-8 text-white" />
          <h1 className="text-3xl font-bold text-white">Ionian Sails</h1>
        </div>
        <p className="text-white/60 text-sm max-w-xs mx-auto">
          Charter management demo — built by{" "}
          <a href="https://digiform.gr" className="text-white/80 underline underline-offset-2">Digiform.gr</a>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 w-full max-w-xl">
        <a
          href="/fleet"
          className="group bg-white rounded-2xl p-8 flex flex-col gap-4 hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <div className="w-12 h-12 rounded-xl bg-[oklch(0.94_0.05_220)] flex items-center justify-center">
            <Users className="w-6 h-6 text-[oklch(0.46_0.18_220)]" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-1">Customer View</h2>
            <p className="text-sm text-slate-500">Browse the fleet, make a booking, manage your charters.</p>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-[oklch(0.46_0.18_220)] mt-auto">
            Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

        <a
          href="/dashboard"
          className="group bg-white rounded-2xl p-8 flex flex-col gap-4 hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
            <LayoutDashboard className="w-6 h-6 text-slate-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-1">Staff Dashboard</h2>
            <p className="text-sm text-slate-500">Manage fleet, bookings, customers, and revenue.</p>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-slate-700 mt-auto">
            Open dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
      </div>

      <p className="mt-10 text-xs text-white/30 text-center max-w-sm">
        All data is fictional and for demonstration purposes only. This app was built as part of a Digiform digital transformation engagement.
      </p>
    </main>
  );
}
