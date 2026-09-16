import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomeHero } from "@/components/home/HomeHero";
import { FeaturedVehicles } from "@/components/home/FeaturedVehicles";
import { WhySimiyu } from "@/components/home/WhySimiyu";
import { ImportTeaser } from "@/components/home/ImportTeaser";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { StatsBand } from "@/components/home/StatsBand";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = buildMetadata({
  title: "Simiyu Motors | Drive Your Dream. We Deliver.",
  description:
    "Buy, sell, import, and service vehicles in Nairobi, Kenya. Simiyu Motors sources local and foreign-used cars and provides professional automotive servicing.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedVehicles />
      <WhySimiyu />
      <ImportTeaser />
      <ServicesTeaser />
      <HowItWorks />
      <Testimonials />
      <StatsBand />
      <FinalCta />
    </>
  );
}
