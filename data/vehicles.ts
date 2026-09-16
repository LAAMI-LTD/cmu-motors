/**
 * Sample vehicle data for layout/demo purposes only.
 *
 * IMPORTANT: `isSampleData: true` on every entry means this is NOT real
 * inventory. Replace this file's contents with actual stock, real prices,
 * real descriptions, and real photography before launch — never present
 * sample vehicles as available cars.
 */

export type Fuel = "Petrol" | "Diesel" | "Hybrid" | "Electric";
export type Transmission = "Automatic" | "Manual";
export type Availability = "Available" | "Reserved" | "Sold";
export type ImportStatus = "Locally available" | "Imported";
export type BodyType = "SUV" | "Sedan" | "Pickup" | "Hatchback" | "Crossover";

export type Vehicle = {
  slug: string;
  make: string;
  model: string;
  year: number;
  mileageKm: number;
  fuel: Fuel;
  transmission: Transmission;
  engineCc: number;
  bodyType: BodyType;
  location: string;
  priceKes: number;
  availability: Availability;
  importStatus: ImportStatus;
  description: string;
  features: string[];
  photoCount: number;
  isSampleData: true;
};

export const vehicles: Vehicle[] = [
  {
    slug: "toyota-land-cruiser-prado-2021",
    make: "Toyota",
    model: "Land Cruiser Prado",
    year: 2021,
    mileageKm: 42000,
    fuel: "Diesel",
    transmission: "Automatic",
    engineCc: 2800,
    bodyType: "SUV",
    location: "Nairobi",
    priceKes: 9800000,
    availability: "Available",
    importStatus: "Locally available",
    description:
      "A well-kept Prado with full service history and no accident record. Comfortable for long upcountry drives, with enough presence for daily business use.",
    features: [
      "Leather seats",
      "Reverse camera",
      "Sunroof",
      "Alloy wheels",
      "Cruise control",
      "Third-row seating",
    ],
    photoCount: 6,
    isSampleData: true,
  },
  {
    slug: "mercedes-benz-c200-2020",
    make: "Mercedes-Benz",
    model: "C200",
    year: 2020,
    mileageKm: 38500,
    fuel: "Petrol",
    transmission: "Automatic",
    engineCc: 1500,
    bodyType: "Sedan",
    location: "Nairobi",
    priceKes: 6200000,
    availability: "Available",
    importStatus: "Imported",
    description:
      "Imported and verified before listing. Clean interior, low mileage for its age, and the kind of ride that still feels new after the first year.",
    features: [
      "Leather seats",
      "Ambient lighting",
      "Reverse camera",
      "Keyless entry",
      "Heated seats",
    ],
    photoCount: 5,
    isSampleData: true,
  },
  {
    slug: "mazda-cx-5-2019",
    make: "Mazda",
    model: "CX-5",
    year: 2019,
    mileageKm: 51000,
    fuel: "Petrol",
    transmission: "Automatic",
    engineCc: 2000,
    bodyType: "Crossover",
    location: "Mombasa",
    priceKes: 3400000,
    availability: "Available",
    importStatus: "Imported",
    description:
      "A practical, fuel-efficient crossover that's easy to park in the city and comfortable enough for weekend trips out of town.",
    features: ["Reverse camera", "Alloy wheels", "Bluetooth audio", "Cruise control"],
    photoCount: 5,
    isSampleData: true,
  },
  {
    slug: "subaru-forester-2020",
    make: "Subaru",
    model: "Forester",
    year: 2020,
    mileageKm: 46000,
    fuel: "Petrol",
    transmission: "Automatic",
    engineCc: 2000,
    bodyType: "SUV",
    location: "Nairobi",
    priceKes: 3900000,
    availability: "Reserved",
    importStatus: "Imported",
    description:
      "All-wheel drive as standard, which makes this a solid choice for Kenyan roads outside the city. Currently reserved, but similar units can be sourced.",
    features: ["All-wheel drive", "Roof rails", "Reverse camera", "Alloy wheels"],
    photoCount: 4,
    isSampleData: true,
  },
  {
    slug: "toyota-hilux-2022",
    make: "Toyota",
    model: "Hilux",
    year: 2022,
    mileageKm: 21000,
    fuel: "Diesel",
    transmission: "Manual",
    engineCc: 2400,
    bodyType: "Pickup",
    location: "Nakuru",
    priceKes: 5100000,
    availability: "Available",
    importStatus: "Locally available",
    description:
      "Low mileage, single owner, built for work. Ideal for business use where reliability matters more than comfort features.",
    features: ["Tow bar", "Bed liner", "Central locking", "Fog lights"],
    photoCount: 6,
    isSampleData: true,
  },
  {
    slug: "bmw-x3-2019",
    make: "BMW",
    model: "X3",
    year: 2019,
    mileageKm: 58000,
    fuel: "Petrol",
    transmission: "Automatic",
    engineCc: 2000,
    bodyType: "SUV",
    location: "Nairobi",
    priceKes: 4700000,
    availability: "Available",
    importStatus: "Imported",
    description:
      "A confident, well-equipped SUV that still drives tight at this mileage. Full inspection report available on request.",
    features: ["Leather seats", "Panoramic sunroof", "Reverse camera", "Heated seats", "Keyless entry"],
    photoCount: 5,
    isSampleData: true,
  },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function getSimilarVehicles(vehicle: Vehicle, limit = 3): Vehicle[] {
  return vehicles
    .filter((v) => v.slug !== vehicle.slug)
    .filter((v) => v.bodyType === vehicle.bodyType || v.make === vehicle.make)
    .slice(0, limit);
}

export function formatKes(amount: number): string {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatKm(km: number): string {
  return `${new Intl.NumberFormat("en-KE").format(km)} km`;
}
