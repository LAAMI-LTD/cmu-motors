import { z } from "zod";

const name = z.string().trim().min(2, "Enter your full name");
const phone = z
  .string()
  .trim()
  .min(7, "Enter a valid phone number")
  .max(20, "Enter a valid phone number");
const email = z.string().trim().email("Enter a valid email address");
const optionalText = z.string().trim().max(2000).optional().or(z.literal(""));

export const importRequestSchema = z.object({
  name,
  phone,
  email,
  preferredMake: z.string().trim().min(1, "Tell us the make you want"),
  preferredModel: z.string().trim().min(1, "Tell us the model you want"),
  budget: z.string().trim().min(1, "Enter your budget"),
  yearRange: z.string().trim().min(1, "Enter a year range"),
  transmission: z.enum(["No preference", "Automatic", "Manual"]),
  fuelType: z.enum(["No preference", "Petrol", "Diesel", "Hybrid", "Electric"]),
  additionalRequirements: optionalText,
});
export type ImportRequestValues = z.infer<typeof importRequestSchema>;

export const requestCarSchema = z.object({
  name,
  phone,
  email,
  make: z.string().trim().min(1, "Tell us the make you're after"),
  model: z.string().trim().optional().or(z.literal("")),
  budget: z.string().trim().min(1, "Enter your budget"),
  details: optionalText,
});
export type RequestCarValues = z.infer<typeof requestCarSchema>;

export const sellCarSchema = z.object({
  name,
  phone,
  email,
  make: z.string().trim().min(1, "Enter the vehicle make"),
  model: z.string().trim().min(1, "Enter the vehicle model"),
  year: z
    .string()
    .trim()
    .regex(/^\d{4}$/, "Enter a 4-digit year"),
  mileageKm: z.string().trim().min(1, "Enter the mileage"),
  expectedPriceKes: z.string().trim().min(1, "Enter your expected price"),
  location: z.string().trim().min(1, "Enter the vehicle's location"),
  additionalInfo: optionalText,
});
export type SellCarValues = z.infer<typeof sellCarSchema>;

export const serviceBookingSchema = z.object({
  name,
  phone,
  email,
  vehicleMakeModel: z.string().trim().min(1, "Enter your vehicle's make and model"),
  service: z.enum([
    "Vehicle servicing",
    "Diagnostics & inspection",
    "Preventive maintenance",
    "General mechanical",
  ]),
  preferredDate: z.string().trim().min(1, "Choose a preferred date"),
  notes: optionalText,
});
export type ServiceBookingValues = z.infer<typeof serviceBookingSchema>;

export const contactSchema = z.object({
  name,
  phone,
  email,
  subject: z.string().trim().min(1, "Enter a subject"),
  message: z.string().trim().min(10, "Enter a short message"),
});
export type ContactValues = z.infer<typeof contactSchema>;
