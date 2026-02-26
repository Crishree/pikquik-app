import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">Pikquik</p>
          <p className="mt-2 text-sm text-muted-foreground">Pre-orders + instant pickup verification to eliminate billing queues.</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Product</p>
          <div className="mt-2 space-y-1">
            <Link href="/features" className="block">Features</Link>
            <Link href="/pricing" className="block">Pricing</Link>
            <Link href="/security" className="block">Security</Link>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Company</p>
          <div className="mt-2 space-y-1">
            <Link href="/contact" className="block">Contact</Link>
            <Link href="/demo" className="block">Book demo</Link>
            <p>© {new Date().getFullYear()} Pikquik</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
