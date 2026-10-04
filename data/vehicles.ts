/**
 * Real featured vehicles, as supplied by the client.
 *
 * A few fields below are marked inline where the client's description
 * didn't specify an exact value (e.g. exact mileage, engine cc, or
 * import/location status) — per the brief's rule against inventing
 * business information, these use `undefined`/a documented default
 * rather than a fabricated number. Confirm and fill these in with the
 * client before this goes live.
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
  /** Exact mileage in km, when known. */
  mileageKm?: number;
  /** Client-provided mileage as given (e.g. "20,xxx km"), when an exact
   *  figure wasn't supplied. Takes display priority over mileageKm. */
  mileageNote?: string;
  fuel: Fuel;
  transmission: Transmission;
  /** Engine size in cc, when stated. */
  engineCc?: number;
  bodyType: BodyType;
  color?: string;
  /** Internal stock reference, when the client provided one. */
  stockId?: string;
  location: string;
  priceKes: number;
  availability: Availability;
  importStatus: ImportStatus;
  description: string;
  features: string[];
  /** Photo count used only as a placeholder-slide count when `images` isn't set yet. */
  photoCount: number;
  /** Paths under /public/vehicles/, in display order. First is the card/cover photo. */
  images?: string[];
};

// Location and import status were not specified by the client for these
// four vehicles. Defaulting to Nairobi / Locally available since that's
// where the business is based and these are presented as current
// showroom stock — confirm with the client and correct if any of these
// are actually still in transit/import.
const DEFAULT_LOCATION = "Nairobi";
const DEFAULT_IMPORT_STATUS: ImportStatus = "Locally available";

export const vehicles: Vehicle[] = [
  {
    slug: "subaru-xv-2019",
    make: "Subaru",
    model: "XV",
    year: 2019,
    fuel: "Hybrid",
    transmission: "Automatic",
    engineCc: 2000,
    bodyType: "Crossover",
    color: "Black",
    location: DEFAULT_LOCATION,
    priceKes: 2650000,
    availability: "Available",
    importStatus: DEFAULT_IMPORT_STATUS,
    description:
      "Subaru XV E-Boxer (Hybrid), 2000cc GTE with Symmetrical AWD. Fully loaded with a black interior throughout.",
    features: [
      "E-Boxer hybrid system",
      "Symmetrical AWD (GTE)",
      "Black interior, fully loaded",
      "Original Subaru alloy wheels",
      "Rear spoiler",
      "Roof rails",
    ],
    photoCount: 1,
    images: ["/vehicles/subaru-xv-black.jpeg"],
  },
  {
    slug: "toyota-land-cruiser-j250-2024",
    make: "Toyota",
    model: "Land Cruiser J250",
    year: 2024,
    mileageNote: "20,xxx km",
    fuel: "Diesel",
    transmission: "Automatic",
    engineCc: 2800,
    bodyType: "SUV",
    color: "Black",
    stockId: "GD2895",
    location: DEFAULT_LOCATION,
    priceKes: 13999999,
    availability: "Available",
    importStatus: DEFAULT_IMPORT_STATUS,
    description:
      "2024 Land Cruiser J250, 2800cc turbo diesel. Seven-seater with brown leather seats and a full feature set.",
    features: [
      "Sunroof",
      "7 seater",
      "Brown leather seats",
      "Multifunction steering wheel",
      "Cruise control",
      "Push start",
      "Reverse camera",
      "Alloy wheels",
      "LED headlights",
      "4WD",
    ],
    photoCount: 1,
    images: ["/vehicles/tyt-land-cruiser-2024.jpeg"],
  },
  {
    slug: "toyota-rav4-hybrid-2019",
    make: "Toyota",
    model: "RAV4",
    year: 2019,
    mileageNote: "31,xxx km",
    fuel: "Hybrid",
    transmission: "Automatic",
    bodyType: "SUV",
    color: "Red",
    stockId: "AX6325",
    location: DEFAULT_LOCATION,
    priceKes: 4600000,
    availability: "Available",
    importStatus: DEFAULT_IMPORT_STATUS,
    description:
      "Petrol-hybrid RAV4 with a fuel-efficient hybrid system, leather seats, and auto boot.",
    features: [
      "Sunroof",
      "Leather seats",
      "Auto boot",
      "Multifunction steering wheel",
      "Cruise control",
      "Push start",
      "Reverse camera",
      "Alloy wheels",
      "LED headlights",
      "Fuel-efficient hybrid system",
    ],
    photoCount: 1,
    images: ["/vehicles/tyt-rav4-hybrid-red.jpeg"],
  },
  {
    slug: "toyota-hilux-2019-rally-edition",
    make: "Toyota",
    model: "Hilux",
    year: 2019,
    fuel: "Diesel",
    transmission: "Automatic",
    engineCc: 2400,
    bodyType: "Pickup",
    color: "Black",
    location: "Nairobi",
    priceKes: 5200000,
    availability: "Available",
    importStatus: "Imported",
    description:
      "2019 Toyota Hilux Ex Japan Rally Edition, black 2400cc diesel, 4WD automatic pickup with a full feature set and new registration.",
    features: [
      "4WD",
      "2400cc diesel engine",
      "Automatic transmission",
      "DVD/CD player with USB port",
      "Push start",
      "Cloth seats with seat warmers",
      "Alloy rims",
      "Fog lights",
      "Reverse camera",
      "Steering switch controls",
      "ECO-power drive",
      "Bluetooth/USB/Aux connectivity",
      "Rear cover",
      "New registration",
    ],
    photoCount: 6,
    images: [
      "/vehicles/tyt-hilux-2019-front-lft.jpeg",
      "/vehicles/tyt-hilux-2019-front-rght.jpeg",
      "/vehicles/tyt-hilux-2019-back-lft.jpeg",
      "/vehicles/tyt-hilux-2019-back-rght.jpeg",
      "/vehicles/tyt-hilux-2019-int-front.jpeg",
      "/vehicles/tyt-hilux-2019-int-back.jpeg",
    ],
  },
  {
    slug: "toyota-crown-2023",
    make: "Toyota",
    model: "Crown (new model)",
    year: 2023,
    mileageKm: 10000,
    fuel: "Hybrid",
    transmission: "Automatic",
    engineCc: 2400,
    bodyType: "Sedan",
    location: DEFAULT_LOCATION,
    priceKes: 6650000,
    availability: "Available",
    importStatus: DEFAULT_IMPORT_STATUS,
    description:
      "2023 Toyota Crown, new model. Hybrid + turbo 2400cc petrol engine with very low mileage. Fully loaded.",
    features: [
      "Sunroof",
      "Black & brown genuine leather seats",
      "Seat memory",
      "DVD/Bluetooth radio with back camera",
      "Power boot",
      "Original 2023 Crown rims",
      "Fully loaded",
    ],
    photoCount: 5,
    images: [
      "/vehicles/tyt-crown-front-left.jpeg",
      "/vehicles/tyt-crown-front-right.jpeg",
      "/vehicles/tyt-crown-back-left.jpeg",
      "/vehicles/tyt-crown-back-right.jpeg",
      "/vehicles/tyt-crown-interior-cp.jpeg",
    ],
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

/** Displays the client's mileage note verbatim when given, otherwise a
 *  formatted exact figure, otherwise an honest "On request". */
export function formatMileage(vehicle: Vehicle): string {
  if (vehicle.mileageNote) return vehicle.mileageNote;
  if (vehicle.mileageKm !== undefined) return formatKm(vehicle.mileageKm);
  return "On request";
}
