export type Service = {
  name: string;
  description: string;
  href: string;
};

export const services: Service[] = [
  {
    name: "Vehicle servicing",
    description:
      "Scheduled servicing to keep your vehicle running the way it should, whatever you drive.",
    href: "/services",
  },
  {
    name: "Diagnostics & inspection",
    description:
      "Full diagnostic checks before you buy, sell, or simply want peace of mind.",
    href: "/services",
  },
  {
    name: "Preventive maintenance",
    description:
      "Catch small issues before they become expensive ones, on a schedule built around your vehicle.",
    href: "/services",
  },
  {
    name: "General mechanical",
    description:
      "From routine repairs to more involved mechanical work, handled by people who know cars.",
    href: "/services",
  },
];
