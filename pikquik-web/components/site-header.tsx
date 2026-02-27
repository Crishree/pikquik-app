import Link from "next/link";
import { Zap } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-black"><Zap size={16} /></span>
          Pikquik
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          <Link className="nav-link" href="/features">Features</Link>
          <Link className="nav-link" href="/pricing">Pricing</Link>
          <Link className="nav-link" href="/security">Security</Link>
          <Link className="nav-link" href="/contact">Contact</Link>
          <Link className="btn-primary ml-2" href="/demo">Book a demo</Link>
          <ThemeToggle />
        </nav>
        <div className="md:hidden"><ThemeToggle /></div>
      </div>
    </header>
  );
}
