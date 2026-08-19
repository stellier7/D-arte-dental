import { NextResponse } from "next/server";
import { validate, type NewAppointment } from "@/lib/appointments";
import { createAppointment, listAppointments } from "@/lib/appointments-store";

export const dynamic = "force-dynamic";

export async function GET() {
  const appointments = await listAppointments();
  return NextResponse.json({ appointments });
}

export async function POST(request: Request) {
  let body: Partial<NewAppointment>;
  try {
    body = (await request.json()) as Partial<NewAppointment>;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const { ok, errors } = validate(body);
  if (!ok) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const appointment = await createAppointment(body as NewAppointment);
  return NextResponse.json({ appointment }, { status: 201 });
}
