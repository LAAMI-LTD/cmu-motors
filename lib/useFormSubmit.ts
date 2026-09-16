"use client";

import { useState } from "react";

export type SubmitStatus = "idle" | "loading" | "success" | "error";

/**
 * POSTs JSON to `endpoint` and tracks a real request lifecycle. Never
 * reports success without an actual response from the server — per the
 * brief, forms must not pretend to succeed when there's nothing behind
 * them.
 */
export function useFormSubmit(endpoint: string) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function submit(values: unknown) {
    setStatus("loading");
    setErrorMessage(null);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setErrorMessage(
          body?.message || "Something went wrong. Please try again."
        );
        setStatus("error");
        return false;
      }

      setStatus("success");
      return true;
    } catch {
      setErrorMessage(
        "Couldn't reach the server. Check your connection and try again."
      );
      setStatus("error");
      return false;
    }
  }

  function reset() {
    setStatus("idle");
    setErrorMessage(null);
  }

  return { status, errorMessage, submit, reset };
}
