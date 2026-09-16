export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Cars", href: "/cars" },
  { label: "Import a Car", href: "/import" },
  { label: "Sell Your Car", href: "/sell-your-car" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta: NavLink = { label: "Find Your Car", href: "/cars" };
