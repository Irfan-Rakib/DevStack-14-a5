import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-gradient-to-br from-white via-slate-50 to-violet-50 py-16 lg:py-24"
    >
      <div className="mx-auto grid w-[92%] max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}

        <div>
          <span className="mb-5 inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600">
            ✨ Learn • Build • Grow
          </span>

          <h1 className="mb-6 text-4xl leading-tight font-bold text-slate-800 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="gradient-text">Development Stack</span>
          </h1>

          <p className="mb-8 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="brand-gradient rounded-xl px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Illustration */}

        <div>
          <img src="../assets/banner-stack.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
