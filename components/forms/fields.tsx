"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded border bg-white px-3.5 py-2.5 text-sm text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-cyan/40";

type FieldWrapperProps = {
  label: string;
  htmlFor: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

export function FieldWrapper({
  label,
  htmlFor,
  error,
  className,
  children,
}: FieldWrapperProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-text">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-red">
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  wrapperClassName?: string;
};

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, wrapperClassName, className, ...props }, ref) => (
    <FieldWrapper label={label} htmlFor={id!} error={error} className={wrapperClassName}>
      <input
        ref={ref}
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          fieldBase,
          error ? "border-red" : "border-border focus:border-cyan",
          className
        )}
        {...props}
      />
    </FieldWrapper>
  )
);
TextField.displayName = "TextField";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  wrapperClassName?: string;
};

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, wrapperClassName, className, rows = 4, ...props }, ref) => (
    <FieldWrapper label={label} htmlFor={id!} error={error} className={wrapperClassName}>
      <textarea
        ref={ref}
        id={id}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          fieldBase,
          "resize-y",
          error ? "border-red" : "border-border focus:border-cyan",
          className
        )}
        {...props}
      />
    </FieldWrapper>
  )
);
TextareaField.displayName = "TextareaField";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: string[];
  wrapperClassName?: string;
};

export const SelectField = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, id, options, wrapperClassName, className, ...props }, ref) => (
    <FieldWrapper label={label} htmlFor={id!} error={error} className={wrapperClassName}>
      <select
        ref={ref}
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          fieldBase,
          error ? "border-red" : "border-border focus:border-cyan",
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldWrapper>
  )
);
SelectField.displayName = "SelectField";
