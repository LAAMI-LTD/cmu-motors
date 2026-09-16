import { CheckCircle2, AlertCircle } from "lucide-react";

export function FormSuccess({ children }: { children: React.ReactNode }) {
  return (
    <div
      role="status"
      className="flex items-start gap-3 rounded-lg border border-cyan/30 bg-cyan/5 p-5"
    >
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />
      <div className="text-sm text-text">{children}</div>
    </div>
  );
}

export function FormError({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="flex items-start gap-3 rounded-lg border border-red/30 bg-red/5 p-4"
    >
      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red" aria-hidden="true" />
      <p className="text-sm text-text">{message}</p>
    </div>
  );
}
