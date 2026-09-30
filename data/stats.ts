export type Stat = {
  value: string;
  label: string;
  isPlaceholder: boolean;
};

/**
 * Real figures as supplied by the client.
 */
export const stats: Stat[] = [
  { value: "4+", label: "Years in operation", isPlaceholder: false },
  { value: "50+", label: "Vehicles sourced", isPlaceholder: false },
  { value: "100+", label: "Vehicles serviced", isPlaceholder: false },
  { value: "6+", label: "Countries sourced from", isPlaceholder: false },
];
