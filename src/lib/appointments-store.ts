import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type { Appointment, NewAppointment, Service } from "@/lib/appointments";

// A small JSON-file store keeps the starter app dependency-light while still
// persisting real records across requests. Swap for a database when needed.
// This module touches the filesystem, so only import it from server code.
const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "appointments.json");

async function readAll(): Promise<Appointment[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as Appointment[];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

async function writeAll(appointments: Appointment[]): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(appointments, null, 2), "utf8");
}

export async function listAppointments(): Promise<Appointment[]> {
  const all = await readAll();
  return all.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function createAppointment(
  input: NewAppointment,
): Promise<Appointment> {
  const all = await readAll();
  const appointment: Appointment = {
    id: randomUUID(),
    name: input.name.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    service: input.service as Service,
    preferredDate: input.preferredDate,
    notes: (input.notes ?? "").trim(),
    createdAt: new Date().toISOString(),
  };
  all.push(appointment);
  await writeAll(all);
  return appointment;
}
