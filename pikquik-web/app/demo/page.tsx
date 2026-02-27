export default function Page() {
  return (
    <main className="page">
      <h1 className="title">Book a demo</h1>
      <p className="lead">30-minute walkthrough tailored to your outlet operations.</p>
      <form className="card mt-8 grid gap-3 p-6 max-w-2xl">
        <input className="input" placeholder="Full name" />
        <input className="input" placeholder="Company / outlet brand" />
        <input className="input" placeholder="Work email" />
        <input className="input" placeholder="Phone" />
        <button className="btn-primary">Request demo</button>
      </form>
    </main>
  );
}
