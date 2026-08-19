import BookingForm from "@/components/BookingForm";
import { SERVICES } from "@/lib/appointments";
import { listAppointments } from "@/lib/appointments-store";

export const dynamic = "force-dynamic";

const SERVICE_DETAILS: { title: string; blurb: string; icon: string }[] = [
  {
    title: "Check-ups & cleaning",
    blurb: "Routine exams and hygiene visits that keep your smile healthy.",
    icon: "🦷",
  },
  {
    title: "Teeth whitening",
    blurb: "Safe, professional whitening for a brighter, natural-looking smile.",
    icon: "✨",
  },
  {
    title: "Orthodontics",
    blurb: "Modern braces and clear aligners tailored to every age.",
    icon: "😁",
  },
  {
    title: "Implants",
    blurb: "Durable, natural-feeling replacements for missing teeth.",
    icon: "🔩",
  },
];

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function Home() {
  const appointments = await listAppointments();

  return (
    <main className="flex-1">
      <header className="sticky top-0 z-10 border-b border-teal-100 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-lg text-white">
              D
            </span>
            <span className="text-lg font-semibold tracking-tight">
              D-arte <span className="text-teal-600">Dental</span>
            </span>
          </div>
          <nav className="hidden gap-8 text-sm font-medium text-teal-900/70 sm:flex">
            <a className="transition hover:text-teal-700" href="#services">
              Services
            </a>
            <a className="transition hover:text-teal-700" href="#book">
              Book
            </a>
            <a className="transition hover:text-teal-700" href="#schedule">
              Schedule
            </a>
          </nav>
          <a
            href="#book"
            className="rounded-full bg-teal-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-700"
          >
            Book now
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
              Now accepting new patients
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-teal-950 sm:text-5xl">
              Gentle, modern dental care for the whole family.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-teal-900/70">
              At D-arte Dental we combine attentive care with the latest
              technology so every visit is comfortable, quick and stress-free.
              Book your appointment online in under a minute.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Request an appointment
              </a>
              <a
                href="#services"
                className="rounded-full border border-teal-300 px-6 py-3 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
              >
                Explore services
              </a>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
              <div>
                <dt className="text-2xl font-bold text-teal-700">15+</dt>
                <dd className="text-sm text-teal-900/60">Years of care</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-teal-700">8k+</dt>
                <dd className="text-sm text-teal-900/60">Happy smiles</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-teal-700">4.9★</dt>
                <dd className="text-sm text-teal-900/60">Average rating</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-teal-500 to-emerald-400 p-8 text-white shadow-xl">
              <p className="text-sm font-medium uppercase tracking-wide text-white/80">
                Opening hours
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex justify-between border-b border-white/20 pb-2">
                  <span>Mon – Fri</span>
                  <span className="font-medium">8:00 – 19:00</span>
                </li>
                <li className="flex justify-between border-b border-white/20 pb-2">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 – 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Emergencies only</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-white/80">
                123 Riverside Ave · Call us at{" "}
                <span className="font-semibold">+1 555 010 0199</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-teal-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight text-teal-950 sm:text-3xl">
            Services we offer
          </h2>
          <p className="mt-2 max-w-2xl text-teal-900/70">
            Comprehensive dental care under one roof — from preventive hygiene
            to cosmetic and restorative treatments.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_DETAILS.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-teal-100 bg-teal-50/40 p-6 transition hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-teal-950">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-teal-900/70">{service.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-teal-950 sm:text-3xl">
              Book your visit
            </h2>
            <p className="mt-2 max-w-md text-teal-900/70">
              Fill in the form and our team will confirm your appointment by
              phone. We offer {SERVICES.length} core services and flexible
              scheduling.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "No waiting rooms — same-day confirmations",
                "Transparent pricing, no surprises",
                "Friendly, experienced clinicians",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal-100 text-sm text-teal-700">
                    ✓
                  </span>
                  <span className="text-teal-900/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <BookingForm />
          </div>
        </div>
      </section>

      <section id="schedule" className="border-t border-teal-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-teal-950 sm:text-3xl">
              Upcoming requests
            </h2>
            <span className="text-sm text-teal-900/60">
              {appointments.length}{" "}
              {appointments.length === 1 ? "request" : "requests"}
            </span>
          </div>

          {appointments.length === 0 ? (
            <p className="mt-6 rounded-2xl border border-dashed border-teal-200 bg-teal-50/40 p-8 text-center text-teal-900/60">
              No appointment requests yet. Be the first to book above!
            </p>
          ) : (
            <ul className="mt-6 divide-y divide-teal-100 overflow-hidden rounded-2xl border border-teal-100">
              {appointments.map((appointment) => (
                <li
                  key={appointment.id}
                  className="flex flex-wrap items-center justify-between gap-3 bg-white px-5 py-4"
                >
                  <div>
                    <p className="font-medium text-teal-950">
                      {appointment.name}
                    </p>
                    <p className="text-sm text-teal-900/60">
                      {appointment.service}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-teal-800">
                      {formatDate(appointment.preferredDate)}
                    </p>
                    <p className="text-xs text-teal-900/50">
                      {appointment.email}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <footer className="border-t border-teal-100 bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-teal-900/60 sm:flex-row">
          <span>© {new Date().getFullYear()} D-arte Dental. All rights reserved.</span>
          <span>123 Riverside Ave · +1 555 010 0199</span>
        </div>
      </footer>
    </main>
  );
}
