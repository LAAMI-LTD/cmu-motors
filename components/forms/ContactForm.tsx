"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactValues } from "@/lib/validation";
import { useFormSubmit } from "@/lib/useFormSubmit";
import { TextField, TextareaField } from "@/components/forms/fields";
import { FormSuccess, FormError } from "@/components/forms/FormStatus";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const { status, errorMessage, submit, reset: resetStatus } = useFormSubmit(
    "/api/contact"
  );

  async function onSubmit(values: ContactValues) {
    const ok = await submit(values);
    if (ok) resetForm();
  }

  if (status === "success") {
    return (
      <FormSuccess>
        <p className="font-semibold text-navy">Message sent.</p>
        <p className="mt-1 text-muted">
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={resetStatus}
          className="mt-3 text-sm font-semibold text-cyanText hover:underline"
        >
          Send another message
        </button>
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Full name" id="contact-name" error={errors.name?.message} {...register("name")} />
        <TextField label="Phone number" id="contact-phone" type="tel" error={errors.phone?.message} {...register("phone")} />
      </div>
      <TextField label="Email address" id="contact-email" type="email" error={errors.email?.message} {...register("email")} />
      <TextField label="Subject" id="contact-subject" error={errors.subject?.message} {...register("subject")} />
      <TextareaField
        label="Message"
        id="contact-message"
        rows={5}
        error={errors.message?.message}
        {...register("message")}
      />

      {status === "error" && errorMessage && <FormError message={errorMessage} />}

      <button
        type="submit"
        disabled={isSubmitting || status === "loading"}
        className="w-full rounded bg-red px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}
