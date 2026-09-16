"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { primaryNav, primaryCta } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300 ease-premium",
        isScrolled
          ? "border-border bg-white/95 backdrop-blur-sm shadow-card"
          : "border-transparent bg-white"
      )}
    >
      <div
        className={cn(
          "container-page flex items-center justify-between transition-all duration-300 ease-premium",
          isScrolled ? "py-2.5" : "py-4"
        )}
      >
        <Link href="/" className="flex items-center" aria-label="Simiyu Motors home">
          <Image
            src="/branding/logo-horizontal.png"
            alt="Simiyu Motors"
            width={252}
            height={57}
            className={cn(
              "w-auto transition-all duration-300 ease-premium",
              isScrolled ? "h-8" : "h-10"
            )}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {primaryNav.slice(1).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cyanText",
                  isActive ? "text-navy" : "text-text/80"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center rounded bg-red px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {primaryCta.label}
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded p-2 text-navy"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          className="lg:hidden border-t border-border bg-white"
          aria-label="Mobile"
        >
          <ul className="container-page py-4 flex flex-col gap-1">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded px-3 py-3 text-base font-medium",
                    pathname === link.href
                      ? "bg-background text-navy"
                      : "text-text/80 hover:bg-background"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href={primaryCta.href}
                className="block rounded bg-red px-3 py-3 text-center text-base font-semibold text-white"
              >
                {primaryCta.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
