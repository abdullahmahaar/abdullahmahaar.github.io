import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <div className="w-full max-w-lg rounded-2xl border border-border bg-bg-card p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">&lt;&lt; 404 &gt;&gt;</p>
        <h1 className="mt-4 font-display text-4xl italic text-text-primary">Page Not Found</h1>
        <p className="mt-4 text-text-muted">The page you requested does not exist or was moved.</p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full border border-accent-cyan px-5 py-2 text-sm text-accent-cyan transition hover:bg-accent-cyan/10"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
