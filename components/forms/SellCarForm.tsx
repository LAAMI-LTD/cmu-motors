"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sellCarSchema, SellCarValues } from "@/lib/validation";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { TextField, TextareaField } from "@/components/forms/fields";
import { FormSuccess, FormError } from "@/components/forms/FormStatus";

export function SellCarForm() {
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors, isSubmitting },
  } = useForm<SellCarValues>({ resolver: zodResolver(sellCarSchema) });

  const { status, errorMessage, submit, reset: resetStatus } = useFormSubmit(
    "/api/sell-your-car"
  );
  const [fileNames, setFileNames] = useState<string[]>([]);

  async function onSubmit(values: SellCarValues) {
    // Photos are not uploaded anywhere yet — see the note under the field
    // below. Only the text fields are sent to the API route.
    const ok = await submit(values);
    if (ok) {
      resetForm();
      setFileNames([]);
    }
  }

  if (status === "success") {
    return (
      <FormSuccess>
        <p className="font-semibold text-navy">Valuation request received.</p>
        <p className="mt-1 text-muted">
          We&apos;ll review the details and get back to you with next steps.
        </p>
        <button
          type="button"
          onClick={resetStatus}
          className="mt-3 text-sm font-semibold text-cyanText hover:underline"
        >
          Submit another vehicle
        </button>
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Full name" id="sell-name" error={errors.name?.message} {...register("name")} />
        <TextField label="Phone number" id="sell-phone" type="tel" error={errors.phone?.message} {...register("phone")} />
      </div>
      <TextField label="Email address" id="sell-email" type="email" error={errors.email?.message} {...register("email")} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Make" id="sell-make" placeholder="e.g. Nissan" error={errors.make?.message} {...register("make")} />
        <TextField label="Model" id="sell-model" placeholder="e.g. X-Trail" error={errors.model?.message} {...register("model")} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <TextField label="Year" id="sell-year" placeholder="2019" error={errors.year?.message} {...register("year")} />
        <TextField label="Mileage (km)" id="sell-mileage" placeholder="52,000" error={errors.mileageKm?.message} {...register("mileageKm")} />
        <TextField label="Expected price (KES)" id="sell-price" placeholder="3,200,000" error={errors.expectedPriceKes?.message} {...register("expectedPriceKes")} />
      </div>

      <TextField label="Location" id="sell-location" placeholder="e.g. Nairobi" error={errors.location?.message} {...register("location")} />

      <TextareaField
        label="Additional information"
        id="sell-info"
        placeholder="Condition, service history, accident history, anything a buyer should know"
        error={errors.additionalInfo?.message}
        {...register("additionalInfo")}
      />

      <div>
        <label htmlFor="sell-photos" className="mb-1.5 block text-sm font-medium text-text">
          Vehicle photos
        </label>
        <input
          id="sell-photos"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) =>
            setFileNames(Array.from(e.target.files ?? []).map((f) => f.name))
          }
          className="block w-full rounded border border-border bg-white px-3.5 py-2.5 text-sm text-text file:mr-3 file:rounded file:border-0 file:bg-background file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-navy"
        />
        {fileNames.length > 0 && (
          <p className="mt-1.5 text-xs text-muted">
            Selected: {fileNames.join(", ")}
          </p>
        )}
        <p className="mt-1.5 text-xs text-muted">
          Photo upload isn&apos;t connected to storage yet — for now, mention
          in the message field that photos are available, and we&apos;ll
          follow up to collect them.
        </p>
      </div>

      {status === "error" && errorMessage && <FormError message={errorMessage} />}

      <button
        type="submit"
        disabled={isSubmitting || status === "loading"}
        className="w-full rounded bg-red px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Request a valuation"}
      </button>
    </form>
  );
}
