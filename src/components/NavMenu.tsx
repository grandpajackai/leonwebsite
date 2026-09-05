"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function show() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function hide() {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <Link
        href={href}
        onFocus={show}
        aria-expanded={open}
        className="flex items-center gap-1.5 border-b-[1.5px] border-transparent py-1.5 font-sans text-[13.5px] font-medium leading-none text-white/82 transition-colors hover:border-amber hover:text-white"
      >
        {label}
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          className={`transition-transform ${open ? "-rotate-180" : ""}`}
        >
          <path
            d="M1 1l3.5 3.5L8 1"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      {open && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
          <div className="rounded-card border border-navy/10 bg-white p-5 shadow-card-hover">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
