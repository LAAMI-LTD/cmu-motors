import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CarsExplorer } from "@/components/vehicles/CarsExplorer";

export const metadata: Metadata = buildMetadata({
  title: "Cars for Sale in Nairobi",
  description:
    "Browse local and imported vehicles for sale in Nairobi, Kenya. Filter by make, body type, fuel, transmission, and price.",
  path: "/cars",
});

export default function CarsPage() {
  return <CarsExplorer />;
}
