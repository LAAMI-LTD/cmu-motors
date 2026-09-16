"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { serviceBookingSchema, ServiceBookingValues } from "@/lib/validation";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { TextField, TextareaField, SelectField } from "@/components/forms/fields";
import { FormSuccess, FormError } from "@/components/forms/FormStatus";

const serviceOptions = [
  "Vehicle servicing",
  "Diagnostics & inspection",
  "Preventive maintenance",
  "General mechanical",
] as const;

export function ServiceBookingForm() {
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors, isSubmitting },
  } = useForm<ServiceBookingValues>({
    resolver: zodResolver(serviceBookingSchema),
    defaultValues: { service: "Vehicle servicing" },
  });

  const { status, errorMessage, submit, reset: resetStatus } = useFormSubmit(
    "/api/book-service"
  );

  async function onSubmit(values: ServiceBookingValues) {
    const ok = await submit(values);
    if (ok) resetForm();
  }

  if (status === "success") {
    return (
      <FormSuccess>
        <p className="font-semibold text-navy">Booking request received.</p>
        <p className="mt-1 text-muted">
          We&apos;ll confirm your appointment shortly.
        </p>
        <button
          type="button"
          onClick={resetStatus}
          className="mt-3 text-sm font-semibold text-cyanText hover:underline"
        >
          Book another service
        </button>
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Full name" id="service-name" error={errors.name?.message} {...register("name")} />
        <TextField label="Phone number" id="service-phone" type="tel" error={errors.phone?.message} {...register("phone")} />
      </div>
      <TextField label="Email address" id="service-email" type="email" error={errors.email?.message} {...register("email")} />

      <TextField
        label="Vehicle make & model"
        id="service-vehicle"
        placeholder="e.g. Toyota Vitz"
        error={errors.vehicleMakeModel?.message}
        {...register("vehicleMakeModel")}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <SelectField
          label="Service needed"
          id="service-type"
          options={[...serviceOptions]}
          error={errors.service?.message}
          {...register("service")}
        />
        <TextField
          label="Preferred date"
          id="service-date"
          type="date"
          error={errors.preferredDate?.message}
          {...register("preferredDate")}
        />
      </div>

      <TextareaField
        label="Notes"
        id="service-notes"
        placeholder="Anything specific you'd like the team to look at"
        error={errors.notes?.message}
        {...register("notes")}
      />

      {status === "error" && errorMessage && <FormError message={errorMessage} />}

      <button
        type="submit"
        disabled={isSubmitting || status === "loading"}
        className="w-full rounded bg-red px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Book a service"}
      </button>
    </form>
  );
}
