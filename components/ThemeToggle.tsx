"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2.5">
      <Sun
        className={`h-4 w-4 transition-colors ${
          mounted && !isDark ? "text-ink" : "text-faint"
        }`}
      />
      <button
        type="button"
        role="switch"
        aria-checked={mounted ? isDark : undefined}
        aria-label="Toggle dark mode"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative inline-flex h-6 w-11 items-center rounded-full border border-line bg-surface transition-colors"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-ink shadow-sm transition-transform duration-300 ${
            mounted && isDark ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      <Moon
        className={`h-4 w-4 transition-colors ${
          mounted && isDark ? "text-ink" : "text-faint"
        }`}
      />
    </div>
  );
}
