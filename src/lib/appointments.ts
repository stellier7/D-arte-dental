export const SERVICES = [
  "General check-up & cleaning",
  "Teeth whitening",
  "Orthodontics (braces & aligners)",
  "Dental implants",
  "Emergency care",
] as const;

export type Service = (typeof SERVICES)[number];

export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: Service;
  preferredDate: string;
  notes: string;
  createdAt: string;
}

export interface NewAppointment {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  notes?: string;
}

export interface ValidationResult {
  ok: boolean;
  errors: Record<string, string>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Pure validation shared by the client form and the API route — no Node
// built-ins here so this module stays safe to import from client components.
export function validate(input: Partial<NewAppointment>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.name || input.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!input.email || !EMAIL_RE.test(input.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!input.phone || input.phone.trim().length < 6) {
    errors.phone = "Please enter a contact phone number.";
  }
  if (!input.service || !SERVICES.includes(input.service as Service)) {
    errors.service = "Please choose a service.";
  }
  if (!input.preferredDate) {
    errors.preferredDate = "Please pick a preferred date.";
  }

  return { ok: Object.keys(errors).length === 0, errors };
}
