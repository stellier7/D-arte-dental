"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SERVICES } from "@/lib/appointments";

type FieldErrors = Record<string, string>;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  preferredDate: "",
  notes: "",
};

export default function BookingForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [confirmation, setConfirmation] = useState<string | null>(null);

  function update(field: keyof typeof initialForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});

    const res = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.status === 422) {
      const data = (await res.json()) as { errors: FieldErrors };
      setErrors(data.errors);
      setStatus("idle");
      return;
    }

    if (!res.ok) {
      setErrors({ form: "Something went wrong. Please try again." });
      setStatus("idle");
      return;
    }

    setConfirmation(form.name.split(" ")[0] || form.name);
    setForm(initialForm);
    setStatus("success");
    router.refresh();
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-teal-200 bg-white p-8 shadow-sm"
        role="status"
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-2xl">
          ✓
        </div>
        <h3 className="text-xl font-semibold text-teal-900">
          Thanks, {confirmation}!
        </h3>
        <p className="mt-2 text-teal-800/80">
          Your appointment request has been received. Our front desk will call
          you shortly to confirm the exact time.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-teal-200 bg-white px-3.5 py-2.5 text-sm text-teal-950 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-teal-100 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      {errors.form && (
        <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          {errors.form}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-teal-900">
            Full name
          </span>
          <input
            className={fieldClass}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Doe"
            autoComplete="name"
          />
          {errors.name && (
            <span className="mt-1 block text-xs text-red-600">
              {errors.name}
            </span>
          )}
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-teal-900">
            Email
          </span>
          <input
            className={fieldClass}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane@example.com"
            autoComplete="email"
            type="email"
          />
          {errors.email && (
            <span className="mt-1 block text-xs text-red-600">
              {errors.email}
            </span>
          )}
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-teal-900">
            Phone
          </span>
          <input
            className={fieldClass}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+1 555 010 0199"
            autoComplete="tel"
          />
          {errors.phone && (
            <span className="mt-1 block text-xs text-red-600">
              {errors.phone}
            </span>
          )}
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-teal-900">
            Preferred date
          </span>
          <input
            className={fieldClass}
            value={form.preferredDate}
            onChange={(e) => update("preferredDate", e.target.value)}
            type="date"
          />
          {errors.preferredDate && (
            <span className="mt-1 block text-xs text-red-600">
              {errors.preferredDate}
            </span>
          )}
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm font-medium text-teal-900">
            Service
          </span>
          <select
            className={fieldClass}
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
          >
            <option value="">Select a service…</option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <span className="mt-1 block text-xs text-red-600">
              {errors.service}
            </span>
          )}
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm font-medium text-teal-900">
            Notes <span className="font-normal text-teal-700/60">(optional)</span>
          </span>
          <textarea
            className={`${fieldClass} min-h-[88px] resize-y`}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Anything we should know before your visit?"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Booking…" : "Request appointment"}
      </button>
    </form>
  );
}
