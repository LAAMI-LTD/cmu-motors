import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

// See app/api/import-request/route.ts for the note on backend wiring.
export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please check the form and try again.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  console.log("[contact]", parsed.data);

  return NextResponse.json({ message: "Received" }, { status: 200 });
}
