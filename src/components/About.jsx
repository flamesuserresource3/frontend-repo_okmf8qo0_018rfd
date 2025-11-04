export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">About</h2>
          <p className="mt-2 text-sm text-gray-600">
            A quick snapshot of my approach and the tools I use every day.
          </p>
        </div>
        <div className="md:col-span-2 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            I’m a full‑stack developer focused on crafting polished, accessible interfaces and
            building reliable APIs. I value clear communication, thoughtful design systems, and a
            pragmatic approach to shipping features.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">Frontend</h3>
              <p className="mt-2 text-sm text-gray-600">React, TypeScript, Tailwind, Framer Motion, Radix</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">Backend</h3>
              <p className="mt-2 text-sm text-gray-600">Node, FastAPI, PostgreSQL, MongoDB, Prisma</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">Cloud & DevOps</h3>
              <p className="mt-2 text-sm text-gray-600">Docker, Vercel, AWS, CI/CD, Observability</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">Focus</h3>
              <p className="mt-2 text-sm text-gray-600">Performance, accessibility, UX, maintainability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
