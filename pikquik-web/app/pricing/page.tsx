export default function Page() {
  return (
    <main className="page">
      <h1 className="title">Pricing</h1>
      <div className="grid mt-8 gap-4 md:grid-cols-3">
        <div className="card p-6"><p className="eyebrow">Starter</p><h2 className="h3 mt-2">₹2,999/outlet/month</h2><p className="p mt-2">Great for pilot outlets.</p></div>
        <div className="card p-6 border-accent"><p className="eyebrow">Growth (Most popular)</p><h2 className="h3 mt-2">₹6,999/outlet/month</h2><p className="p mt-2">Best for multi-outlet operations.</p></div>
        <div className="card p-6"><p className="eyebrow">Scale</p><h2 className="h3 mt-2">Custom</h2><p className="p mt-2">Enterprise rollout and support.</p></div>
      </div>
    </main>
  );
}
