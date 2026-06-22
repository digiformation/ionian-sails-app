"use client";
import { Anchor, Menu, X } from "lucide-react";
import { useState } from "react";

export function CustomerNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <Anchor className="w-5 h-5 text-[oklch(0.46_0.18_220)]" />
          Ionian Sails
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="/fleet" className="hover:text-slate-900 transition-colors">Fleet</a>
          <a href="/my-bookings" className="hover:text-slate-900 transition-colors">My Bookings</a>
          <a href="/fleet" className="bg-[oklch(0.46_0.18_220)] text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition-opacity">
            Book a Yacht
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 flex flex-col gap-4 text-sm">
          <a href="/fleet" onClick={() => setOpen(false)} className="text-slate-700">Fleet</a>
          <a href="/my-bookings" onClick={() => setOpen(false)} className="text-slate-700">My Bookings</a>
          <a href="/fleet" onClick={() => setOpen(false)} className="bg-[oklch(0.46_0.18_220)] text-white px-4 py-2 rounded-full text-center">Book a Yacht</a>
        </div>
      )}
    </header>
  );
}
