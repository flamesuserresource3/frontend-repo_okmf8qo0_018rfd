import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description: 'A collaborative whiteboard and doc editor with presence, comments, and offline sync.',
    tags: ['React', 'WebSocket', 'CRDT', 'Tailwind'],
    link: '#',
  },
  {
    title: 'E‑commerce Platform',
    description: 'Headless storefront with serverless functions, payments, and analytics.',
    tags: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Design System & Component Library',
    description: 'Composable UI components with tokens, docs, and visual regression testing.',
    tags: ['Storybook', 'TypeScript', 'Radix', 'Jest'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-20">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Projects</h2>
        <p className="mt-2 text-sm text-gray-600">Selected work that highlights product thinking, craft, and execution.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a key={p.title} href={p.link} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900/10">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:underline">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900">
              View details <ExternalLink className="h-4 w-4" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
