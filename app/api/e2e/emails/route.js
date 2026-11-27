export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { getTestEmails, clearTestEmails } from "@/lib/email";

function isE2ETestMode() {
  return (
    process.env.E2E_TEST_MODE === "true" &&
    process.env.NODE_ENV !== "production"
  );
}

export async function GET() {
  if (!isE2ETestMode()) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    emails: getTestEmails(),
  });
}

export async function DELETE() {
  if (!isE2ETestMode()) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  clearTestEmails();

  return NextResponse.json({
    success: true,
  });
}
