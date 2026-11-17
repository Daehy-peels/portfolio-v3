import {
  CalendarDays,
  CircleCheck,
  Clock3,
  LayoutDashboard,
  Users,
} from "lucide-react";

const stats = [
  { label: "Appointments", value: "08", icon: CalendarDays },
  { label: "Patients", value: "124", icon: Users },
  { label: "Treatments", value: "32", icon: CircleCheck },
];

const appointments = [
  {
    time: "09:00",
    name: "N. Aye",
    treatment: "Skin consultation",
    status: "Confirmed",
    tone: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    time: "10:30",
    name: "J. Lin",
    treatment: "Laser session · follow-up",
    status: "Scheduled",
    tone: "bg-rose-50 text-rose-600 border-rose-200",
  },
  {
    time: "13:15",
    name: "M. Htet",
    treatment: "Hydration therapy",
    status: "Completed",
    tone: "bg-neutral-100 text-neutral-500 border-neutral-200",
  },
];

export function AuraPreview() {
  return (
    <div className="flex h-full max-h-[520px] w-full flex-col overflow-hidden rounded-[12px] border border-white/10 bg-[#fbf7f6] text-neutral-900 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-rose-100 bg-white/80 px-3 py-2">
        <span aria-hidden="true" className="flex gap-1">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="size-1.5 rounded-full bg-rose-200" />
          ))}
        </span>
        <span className="mx-auto rounded-full border border-rose-100 bg-white px-3 py-0.5 font-mono text-[7.5px] tracking-[0.08em] text-neutral-400">
          aura-clinic / dashboard
        </span>
        <span className="rounded-full bg-neutral-900 px-2 py-0.5 font-mono text-[6.5px] tracking-[0.1em] text-white uppercase">
          Example data
        </span>
      </div>

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-[112px] shrink-0 flex-col border-r border-rose-100 bg-white/70 p-3 sm:flex">
          <p className="font-display text-[14px] leading-none font-light tracking-tight text-neutral-800">
            Aura <span className="font-serif text-rose-500 italic">Clinic</span>
          </p>
          <span className="mt-2 h-px w-6 bg-rose-200" />

          <nav className="mt-5 space-y-1">
            {[
              { label: "Overview", icon: LayoutDashboard, active: true },
              { label: "Schedule", icon: CalendarDays, active: false },
              { label: "Patients", icon: Users, active: false },
            ].map((item) => (
              <span
                key={item.label}
                className={
                  item.active
                    ? "flex items-center gap-1.5 rounded-md bg-rose-50 px-1.5 py-1 text-[8px] font-medium text-rose-600"
                    : "flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[8px] text-neutral-500"
                }
              >
                <item.icon className="size-2.5" aria-hidden="true" />
                {item.label}
              </span>
            ))}
          </nav>

          <div className="mt-auto rounded-md border border-rose-100 bg-white p-1.5">
            <p className="font-mono text-[6.5px] tracking-[0.08em] text-neutral-400 uppercase">
              Staff session
            </p>
            <p className="mt-0.5 text-[7.5px] text-neutral-700">Front desk · AM</p>
          </div>
        </aside>

        <div className="flex min-h-0 flex-1 flex-col gap-2.5 p-3 sm:p-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="font-mono text-[6.5px] tracking-[0.14em] text-neutral-400 uppercase">
                Monday, 17 November
              </p>
              <h4 className="mt-0.5 font-display text-[14px] font-medium tracking-tight text-neutral-800">
                Operations overview
              </h4>
            </div>
            <span className="flex items-center gap-1 rounded-full border border-rose-100 bg-white px-2 py-0.5 font-mono text-[6.5px] text-neutral-500">
              <Clock3 className="size-2" aria-hidden="true" />
              Week 47
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-md border border-rose-100 bg-white p-2"
              >
                <stat.icon className="size-2.5 text-rose-400" aria-hidden="true" />
                <p className="mt-1.5 font-display text-[15px] leading-none font-medium tracking-tight text-neutral-800">
                  {stat.value}
                </p>
                <p className="mt-0.5 font-mono text-[6px] tracking-[0.08em] text-neutral-400 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="min-h-0 flex-1 rounded-md border border-rose-100 bg-white p-2">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[6.5px] tracking-[0.12em] text-neutral-400 uppercase">
                Appointment timeline
              </p>
              <p className="font-mono text-[6px] text-rose-400">Today</p>
            </div>

            <ul className="mt-1.5 space-y-1">
              {appointments.map((appointment) => (
                <li
                  key={appointment.time}
                  className="flex items-center gap-1.5 rounded border border-neutral-100 bg-[#fffdfd] px-1.5 py-1"
                >
                  <span className="w-6 shrink-0 font-mono text-[6.5px] text-neutral-400">
                    {appointment.time}
                  </span>
                  <span className="grid size-4 shrink-0 place-items-center rounded-full bg-rose-50 font-mono text-[5.5px] text-rose-500">
                    {appointment.name.replace(/[^A-Z]/g, "")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[7.5px] font-medium text-neutral-700">
                      {appointment.name}
                    </span>
                    <span className="block truncate font-mono text-[6px] text-neutral-400">
                      {appointment.treatment}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 rounded-full border px-1.5 py-[1px] font-mono text-[5.5px] tracking-[0.04em] uppercase ${appointment.tone}`}
                  >
                    {appointment.status}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-1.5 flex items-center justify-between rounded border border-dashed border-rose-100 px-1.5 py-1">
              <span className="font-mono text-[6px] text-neutral-400">
                3 treatment logs recorded this morning
              </span>
              <span className="font-mono text-[6px] text-rose-500">View →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
