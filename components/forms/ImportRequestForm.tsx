"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { importRequestSchema, ImportRequestValues } from "@/lib/validation";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { TextField, TextareaField, SelectField } from "@/components/forms/fields";
import { FormSuccess, FormError } from "@/components/forms/FormStatus";

export function ImportRequestForm() {
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors, isSubmitting },
  } = useForm<ImportRequestValues>({
    resolver: zodResolver(importRequestSchema),
    defaultValues: { transmission: "No preference", fuelType: "No preference" },
  });

  const { status, errorMessage, submit, reset: resetStatus } = useFormSubmit(
    "/api/import-request"
  );

  async function onSubmit(values: ImportRequestValues) {
    const ok = await submit(values);
    if (ok) resetForm();
  }

  if (status === "success") {
    return (
      <FormSuccess>
        <p className="font-semibold text-navy">Request received.</p>
        <p className="mt-1 text-muted">
          We&apos;ll be in touch shortly to talk through sourcing your vehicle.
        </p>
        <button
          type="button"
          onClick={resetStatus}
          className="mt-3 text-sm font-semibold text-cyanText hover:underline"
        >
          Submit another request
        </button>
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Full name" id="import-name" error={errors.name?.message} {...register("name")} />
        <TextField label="Phone number" id="import-phone" type="tel" error={errors.phone?.message} {...register("phone")} />
      </div>
      <TextField label="Email address" id="import-email" type="email" error={errors.email?.message} {...register("email")} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Preferred make" id="import-make" placeholder="e.g. Toyota" error={errors.preferredMake?.message} {...register("preferredMake")} />
        <TextField label="Preferred model" id="import-model" placeholder="e.g. Land Cruiser" error={errors.preferredModel?.message} {...register("preferredModel")} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Budget (KES)" id="import-budget" placeholder="e.g. 4,000,000 – 5,000,000" error={errors.budget?.message} {...register("budget")} />
        <TextField label="Year range" id="import-year" placeholder="e.g. 2019 – 2022" error={errors.yearRange?.message} {...register("yearRange")} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <SelectField
          label="Transmission"
          id="import-transmission"
          options={["No preference", "Automatic", "Manual"]}
          error={errors.transmission?.message}
          {...register("transmission")}
        />
        <SelectField
          label="Fuel type"
          id="import-fuel"
          options={["No preference", "Petrol", "Diesel", "Hybrid", "Electric"]}
          error={errors.fuelType?.message}
          {...register("fuelType")}
        />
      </div>

      <TextareaField
        label="Additional requirements"
        id="import-requirements"
        placeholder="Trim level, colour, mileage limit, anything else that matters to you"
        error={errors.additionalRequirements?.message}
        {...register("additionalRequirements")}
      />

      {status === "error" && errorMessage && <FormError message={errorMessage} />}

      <button
        type="submit"
        disabled={isSubmitting || status === "loading"}
        className="w-full rounded bg-red px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Start your import request"}
      </button>
    </form>
  );
}
