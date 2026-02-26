cd /workspaces/pikquik-app/pikquik-web
cat > app/layout.tsx <<'EOF'
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Pikquik | Pre-orders that feel instant.",
  description: "Pre-orders + instant pickup verification for food outlets."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <Link href="/" className="text-xl font-semibold text-zinc-100">Pikquik</Link>
            <nav className="flex items-center gap-4 text-sm text-zinc-300">
              <Link href="/features">Features</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/security">Security</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/demo" className="rounded-xl bg-amber-400 px-3 py-2 font-semibold text-zinc-950">Book demo</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-zinc-200 bg-zinc-50 py-10 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 text-sm text-zinc-600 dark:text-zinc-300">
            © {new Date().getFullYear()} Pikquik
          </div>
        </footer>
      </body>
    </html>
  );
}
