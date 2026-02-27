export default function Page() {
  return (
    <main className="page">
      <h1 className="title">Contact</h1>
      <form className="card mt-8 grid gap-3 p-6 md:grid-cols-2">
        <input className="input" placeholder="Full name" />
        <input className="input" placeholder="Work email" />
        <input className="input" placeholder="Phone" />
        <input className="input" placeholder="Number of outlets" />
        <textarea className="input md:col-span-2 min-h-28" placeholder="What do you want to improve in pickup operations?" />
        <button className="btn-primary md:col-span-2">Submit</button>
      </form>
    </main>
  );
}
