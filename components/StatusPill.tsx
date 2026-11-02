"use client";

import { useEffect, useState } from "react";
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudFog } from "lucide-react";
import { profile } from "@/lib/data";

/**
 * Maps an Open-Meteo WMO weather code to an icon.
 * https://open-meteo.com/en/docs
 */
function weatherIcon(code: number | null) {
  const cls = "h-3.5 w-3.5 text-faint";
  if (code === null) return <Sun className={cls} />;
  if (code === 0 || code === 1) return <Sun className={cls} />;
  if (code >= 2 && code <= 3) return <Cloud className={cls} />;
  if (code >= 45 && code <= 48) return <CloudFog className={cls} />;
  if (code >= 51 && code <= 67) return <CloudRain className={cls} />;
  if (code >= 71 && code <= 77) return <CloudSnow className={cls} />;
  if (code >= 80 && code <= 82) return <CloudRain className={cls} />;
  if (code >= 95) return <CloudLightning className={cls} />;
  return <Cloud className={cls} />;
}

function formatTime(tz: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: tz,
    }).format(new Date());
  } catch {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  }
}

export function StatusPill() {
  const [time, setTime] = useState<string>("--:--");
  const [temp, setTemp] = useState<number | null>(null);
  const [code, setCode] = useState<number | null>(null);

  const { label, timezone, latitude, longitude } = profile.location;
  // Show the current location (city), e.g. "Hyderabad, India" -> "Hyderabad".
  const cityLabel = label.split(",")[0].trim();

  useEffect(() => {
    setTime(formatTime(timezone));
    const id = setInterval(() => setTime(formatTime(timezone)), 1000 * 30);
    return () => clearInterval(id);
  }, [timezone]);

  useEffect(() => {
    let cancelled = false;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`;
    fetch(url)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => {
        if (cancelled) return;
        if (typeof d?.current?.temperature_2m === "number") {
          setTemp(Math.round(d.current.temperature_2m));
        }
        if (typeof d?.current?.weather_code === "number") {
          setCode(d.current.weather_code);
        }
      })
      .catch(() => {
        /* weather is best-effort; silently ignore */
      });
    return () => {
      cancelled = true;
    };
  }, [latitude, longitude]);

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm">
      <span className="font-medium tabular-nums text-ink">{time}</span>
      <span className="text-[11px] font-medium uppercase tracking-wide text-faint">
        {cityLabel}
      </span>
      <span className="h-3.5 w-px bg-line" aria-hidden />
      {weatherIcon(code)}
      <span className="tabular-nums text-muted">
        {temp === null ? "··" : `${temp}°`}
      </span>
    </div>
  );
}
