"use client";
import { Anchor, LayoutDashboard, Ship, CalendarCheck, Users, BarChart3, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/fleet", label: "Fleet", icon: Ship },
  { href: "/dashboard/bookings", label: "Bookings", icon: CalendarCheck },
  { href: "/dashboard/customers", label: "Customers", icon: Users },
  { href: "/dashboard/revenue", label: "Revenue", icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = (
    <nav className="flex flex-col gap-1 mt-8">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={href}
          href={href}
          onClick={() => setOpen(false)}
          className={cn(
            "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors",
            pathname === href
              ? "bg-white/10 text-white font-medium"
              : "text-white/60 hover:text-white hover:bg-white/5"
          )}
        >
          <Icon className="w-4 h-4 shrink-0" />
          {label}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-56 shrink-0 flex-col bg-[oklch(0.22_0.12_255)] min-h-screen p-4">
        <a href="/" className="flex items-center gap-2 text-white font-semibold px-2 py-2">
          <Anchor className="w-5 h-5" />
          Ionian Sails
        </a>
        <span className="px-2 text-[10px] uppercase tracking-widest text-white/30 mt-1">Staff Portal</span>
        {nav}
        <div className="mt-auto px-4 py-3 text-xs text-white/30">Demo · Digiform.gr</div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[oklch(0.22_0.12_255)] px-4 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-white font-semibold text-sm">
          <Anchor className="w-4 h-4" /> Ionian Sails
        </a>
        <button onClick={() => setOpen(!open)} className="text-white p-2">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-[oklch(0.22_0.12_255)] pt-14 px-4">
          {nav}
        </div>
      )}
    </>
  );
}
