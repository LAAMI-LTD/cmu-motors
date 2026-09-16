import { NextResponse } from "next/server";
import { importRequestSchema } from "@/lib/validation";

/**
 * NOTE: this route validates and accepts submissions but does not yet
 * forward them anywhere (email/CRM/DB). Wire that up before launch —
 * see README "API routes" section. It intentionally does NOT fake success
 * on the client; this is a real endpoint that really responds.
 */
export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = importRequestSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please check the form and try again.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // TODO: forward parsed.data to email/CRM once available.
  console.log("[import-request]", parsed.data);

  return NextResponse.json({ message: "Received" }, { status: 200 });
}
