import Image from "next/image";
import Link from "next/link";
import { primaryNav } from "@/data/navigation";
import { siteConfig, contact, social } from "@/data/site";

const services = [
  { label: "Vehicle Servicing", href: "/services" },
  { label: "Import a Car", href: "/import" },
  { label: "Sell Your Car", href: "/sell-your-car" },
  { label: "Request a Car", href: "/request-a-car" },
];

const socialLinks = Object.entries(social).map(([key, value]) => ({
  label: key.charAt(0).toUpperCase() + key.slice(1),
  ...value,
}));

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src="/branding/logo-stacked-dark.png"
            alt="Simiyu Motors"
            width={247}
            height={220}
            className="h-24 w-auto"
          />
          <p className="mt-4 text-sm text-white/60">{siteConfig.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2.5">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 hover:text-cyan transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 hover:text-cyan transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li>{siteConfig.location}</li>
            <li className={contact.phone.isPlaceholder ? "text-white/50 italic" : ""}>
              {contact.phone.isPlaceholder ? (
                contact.phone.value
              ) : (
                <a href={contact.phoneHref} className="hover:text-cyan">
                  {contact.phone.value}
                </a>
              )}
            </li>
            <li className={contact.email.isPlaceholder ? "text-white/50 italic" : ""}>
              {contact.email.isPlaceholder ? (
                contact.email.value
              ) : (
                <a href={`mailto:${contact.email.value}`} className="hover:text-cyan">
                  {contact.email.value}
                </a>
              )}
            </li>
            <li className={contact.hours.isPlaceholder ? "text-white/50 italic" : ""}>
              {contact.hours.value}
            </li>
          </ul>
          <div className="mt-5 flex gap-4">
            {socialLinks.map((s) =>
              s.isPlaceholder ? null : (
                <a
                  key={s.label}
                  href={s.value}
                  className="text-sm text-white/60 hover:text-cyan"
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/70">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
