"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <button className="btn-secondary h-10 w-10 rounded-xl" />;
  const dark = theme === "dark";
  return (
    <button className="btn-secondary h-10 w-10 rounded-xl" onClick={() => setTheme(dark ? "light" : "dark")} aria-label="Toggle theme">
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
