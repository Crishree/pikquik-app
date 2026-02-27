import Link from "next/link";
import { ArrowRight, CheckCircle2, QrCode, Smartphone, ShieldCheck, Coffee, Building2, Store, Cloud } from "lucide-react";

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card hover-lift">{children}</div>;
}

export function HomeSections() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="eyebrow">For cafés, QSR, cafeterias and cloud kitchens</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">Pre-orders that feel instant.</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Let customers order & pay ahead, keep prep queues clean, and verify pickup in seconds with secure order IDs.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/demo" className="btn-primary">Book a demo</Link>
          <a href="#how" className="btn-secondary">See how it works <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/60">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-4 py-6 text-sm text-muted-foreground">
          {["Logo One","Logo Two","Logo Three","Logo Four","Logo Five"].map((x)=><span key={x} className="chip">{x}</span>)}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-4 py-20">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Scan/Link → Order & Pay → Verify & Pickup</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card><div className="p-6"><QrCode className="icon"/><h3 className="h3">Scan / Link</h3><p className="p">Customer scans outlet QR or opens your link.</p></div></Card>
          <Card><div className="p-6"><Smartphone className="icon"/><h3 className="h3">Order & Pay</h3><p className="p">Pre-order and payment are completed before arrival.</p></div></Card>
          <Card><div className="p-6"><CheckCircle2 className="icon"/><h3 className="h3">Verify & Pickup</h3><p className="p">Outlet verifies and hands over without billing delay.</p></div></Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 md:py-12">
        <div className="grid gap-4 lg:grid-cols-2">
          <Card><div className="p-6"><h3 className="h3">For outlets</h3><ul className="list">{["Live prep queue","Instant pickup verification","Per-outlet payment setup","Multi-store control"].map(i=><li key={i}>{i}</li>)}</ul></div></Card>
          <Card><div className="p-6"><h3 className="h3">For customers</h3><ul className="list">{["Fast order ahead","Secure prepay checkout","Repeat orders in 1 tap","Queue-free pickup"].map(i=><li key={i}>{i}</li>)}</ul></div></Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="eyebrow">Use cases</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Built for every food outlet format</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[["Cafés",Coffee],["QSR",Store],["Corporate cafeterias",Building2],["Cloud kitchens",Cloud]].map(([t,Icon]: any) => (
            <Card key={t}><div className="p-6"><Icon className="icon"/><h3 className="h3">{t}</h3><p className="p">Clean, predictable pickup flow at peak times.</p></div></Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="eyebrow">Mini product tour</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Three screens your team uses daily</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card><div className="p-6"><p className="screen-title">Customer Checkout</p><div className="screen-line">Outlet selected</div><div className="screen-line">Total ₹286</div><div className="screen-line">Pay now</div></div></Card>
          <Card><div className="p-6"><p className="screen-title">Outlet Queue</p><div className="screen-line">#PQ-2911 Ready</div><div className="screen-line">Verify pickup</div><div className="screen-line">Mark collected</div></div></Card>
          <Card><div className="p-6"><p className="screen-title">Admin Analytics</p><div className="screen-line">Today GMV ₹72,340</div><div className="screen-line">Active outlets 14</div><div className="screen-line">Repeat rate 38%</div></div></Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="card p-8">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Simple per-outlet monthly pricing</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">Start with one outlet. Scale across regions with the same operating system.</p>
          <Link href="/pricing" className="btn-primary mt-6 inline-flex">View pricing</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="eyebrow">FAQ</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[["How fast can we launch?","Most brands go live in 7-10 days."],["Can each outlet use different payments?","Yes, per-outlet payment setup is supported."],["Can we start with one outlet?","Yes, scale store-by-store without rebuilding."],["Do you support security reviews?","Yes, enterprise security and access controls are available."]].map(([q,a])=>(
            <div key={q as string} className="card p-6"><h3 className="h3">{q}</h3><p className="p mt-2">{a}</p></div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="card p-10 text-center">
          <h2 className="text-3xl font-semibold md:text-5xl">Ready to remove billing queues?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Ship a premium pickup experience for your customers and cleaner operations for your outlets.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/demo" className="btn-primary">Book a demo</Link>
            <Link href="/contact" className="btn-secondary">Talk to sales</Link>
          </div>
        </div>
      </section>
    </>
  );
}
