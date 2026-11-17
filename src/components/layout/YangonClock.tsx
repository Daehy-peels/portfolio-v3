"use client";

import { useCallback, useSyncExternalStore } from "react";

type YangonClockProps = {
  timeZone: string;
};

function formatTime(timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
  }).format(new Date());
}

function subscribe(onStoreChange: () => void) {
  const interval = setInterval(onStoreChange, 30_000);
  return () => clearInterval(interval);
}

export function YangonClock({ timeZone }: YangonClockProps) {
  const getSnapshot = useCallback(() => formatTime(timeZone), [timeZone]);
  const time = useSyncExternalStore(subscribe, getSnapshot, () => "—:—");

  return <span className="tabular-nums">{time}</span>;
}
