import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient + noise overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
          Full‑Stack Web Developer
        </p>
        <h1 className="text-balance text-4xl font-extrabold leading-tight text-gray-900 sm:text-6xl">
          Building delightful, performant web experiences
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-gray-600 sm:text-lg">
          I design and engineer modern applications across the stack — from accessible, animated
          interfaces to robust, scalable APIs.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/20">
            View Projects
          </a>
          <a href="#contact" className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/10">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
