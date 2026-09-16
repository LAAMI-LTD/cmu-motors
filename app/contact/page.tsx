import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { contact, buildWhatsAppLink } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Simiyu Motors in Karen, Nairobi — by phone, WhatsApp, email, or in person.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsappHref = buildWhatsAppLink(
    "Hi Simiyu Motors, I have a question."
  );
  const mapQuery = encodeURIComponent(
    "Kerarapon Drive, off Ngong Road, Karen, Nairobi"
  );

  const details: {
    icon: typeof Phone;
    label: string;
    value: string;
    href?: string;
    isPlaceholder: boolean;
  }[] = [
    {
      icon: Phone,
      label: "Phone",
      value: contact.phone.value,
      href: contact.phoneHref,
      isPlaceholder: contact.phone.isPlaceholder,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contact.whatsappNumber.value,
      href: whatsappHref ?? undefined,
      isPlaceholder: contact.whatsappNumber.isPlaceholder,
    },
    {
      icon: Mail,
      label: "Email",
      value: contact.email.value,
      href: `mailto:${contact.email.value}`,
      isPlaceholder: contact.email.isPlaceholder,
    },
    {
      icon: MapPin,
      label: "Location",
      value: contact.address.value,
      href: undefined,
      isPlaceholder: contact.address.isPlaceholder,
    },
    {
      icon: Clock,
      label: "Business hours",
      value: contact.hours.value,
      href: undefined,
      isPlaceholder: contact.hours.isPlaceholder,
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container-page">
        <p className="text-sm font-medium uppercase tracking-wide text-cyanText">
          Get in touch
        </p>
        <h1 className="mt-2 font-heading text-3xl font-semibold text-navy sm:text-4xl">
          Contact Simiyu Motors
        </h1>
        <p className="mt-3 max-w-xl text-muted">
          Reach us directly, or send an enquiry below and we&apos;ll respond
          as soon as we can.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <ul className="space-y-5">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <item.icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-cyan"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-medium text-muted">
                      {item.label}
                    </p>
                    {item.isPlaceholder ? (
                      <p className="text-sm italic text-muted">{item.value}</p>
                    ) : item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-sm font-medium text-navy hover:text-cyanText"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-navy">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                title="Simiyu Motors location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-white p-6 sm:p-8">
            <h2 className="font-heading text-xl font-semibold text-navy">
              Send an enquiry
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
