"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestCarSchema, RequestCarValues } from "@/lib/validation";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { TextField, TextareaField } from "@/components/forms/fields";
import { FormSuccess, FormError } from "@/components/forms/FormStatus";

export function RequestCarForm() {
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors, isSubmitting },
  } = useForm<RequestCarValues>({ resolver: zodResolver(requestCarSchema) });

  const { status, errorMessage, submit, reset: resetStatus } = useFormSubmit(
    "/api/request-a-car"
  );

  async function onSubmit(values: RequestCarValues) {
    const ok = await submit(values);
    if (ok) resetForm();
  }

  if (status === "success") {
    return (
      <FormSuccess>
        <p className="font-semibold text-navy">Request received.</p>
        <p className="mt-1 text-muted">
          We&apos;ll get back to you with options that match what you&apos;re
          after.
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
        <TextField label="Full name" id="request-name" error={errors.name?.message} {...register("name")} />
        <TextField label="Phone number" id="request-phone" type="tel" error={errors.phone?.message} {...register("phone")} />
      </div>
      <TextField label="Email address" id="request-email" type="email" error={errors.email?.message} {...register("email")} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Make" id="request-make" placeholder="e.g. Toyota" error={errors.make?.message} {...register("make")} />
        <TextField label="Model (if known)" id="request-model" placeholder="e.g. RAV4" error={errors.model?.message} {...register("model")} />
      </div>

      <TextField label="Budget (KES)" id="request-budget" placeholder="e.g. 2,500,000" error={errors.budget?.message} {...register("budget")} />

      <TextareaField
        label="What are you looking for?"
        id="request-details"
        placeholder="Body type, features, timeline, anything that helps us find the right one"
        error={errors.details?.message}
        {...register("details")}
      />

      {status === "error" && errorMessage && <FormError message={errorMessage} />}

      <button
        type="submit"
        disabled={isSubmitting || status === "loading"}
        className="w-full rounded bg-red px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Send request"}
      </button>
    </form>
  );
}
