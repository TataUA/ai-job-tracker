export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Job Tracker</p>

        <h1 className="text-4xl font-bold tracking-tight">
          Track your job applications in one place
        </h1>

        <p className="max-w-2xl text-base text-gray-600">
          A personal dashboard to manage applications, statuses, notes, and next steps.
        </p>
      </section>
    </main>
  );
}
