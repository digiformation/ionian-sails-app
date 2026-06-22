import { CustomerNavbar } from "@/components/customer/navbar";
import { CheckCircle2, Mail, FileText, ArrowRight } from "lucide-react";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <CustomerNavbar />
      <main className="max-w-2xl mx-auto px-4 pt-32 pb-16 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Booking confirmed!</h1>
        <p className="text-slate-500 mb-2">Reference: <span className="font-mono font-semibold text-slate-800">IS-2025-0013</span></p>
        <p className="text-slate-500 mb-10">Thank you. Your booking has been received and your deposit invoice is on its way.</p>

        <div className="bg-white rounded-2xl border border-slate-100 divide-y divide-slate-100 text-left mb-8">
          {[
            { icon: Mail, title: "Deposit invoice sent", desc: "Check your email for payment instructions. 30% deposit due within 48 hours." },
            { icon: FileText, title: "Digital contract incoming", desc: "Your charter agreement will be sent for e-signature once the deposit is received." },
            { icon: CheckCircle2, title: "Confirmation package", desc: "Full briefing pack — marina details, check-in procedures, and contacts — sent 2 weeks before departure." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4 p-5">
              <div className="w-9 h-9 rounded-lg bg-[oklch(0.94_0.05_220)] flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-4 h-4 text-[oklch(0.46_0.18_220)]" />
              </div>
              <div>
                <p className="font-medium text-slate-800 mb-0.5">{title}</p>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/my-bookings" className="inline-flex items-center justify-center gap-2 bg-[oklch(0.46_0.18_220)] text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
            View my bookings <ArrowRight className="w-4 h-4" />
          </a>
          <a href="/fleet" className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-medium hover:bg-slate-50 transition-colors">
            Back to fleet
          </a>
        </div>
      </main>
    </div>
  );
}
