export type Stat = {
  value: string;
  label: string;
  isPlaceholder: boolean;
};

/**
 * Every value here is a placeholder until the business supplies real
 * figures (years operating, vehicles sourced, etc.) — never fabricate
 * import statistics or track record numbers.
 */
export const stats: Stat[] = [
  { value: "[X]+", label: "Years in operation", isPlaceholder: true },
  { value: "[X]+", label: "Vehicles sourced", isPlaceholder: true },
  { value: "[X]+", label: "Vehicles serviced", isPlaceholder: true },
  { value: "[X]", label: "Countries sourced from", isPlaceholder: true },
];
