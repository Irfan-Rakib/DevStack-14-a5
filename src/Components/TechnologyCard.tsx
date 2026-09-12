import type { FC } from "react";

import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;

  selectedStack: Technology[];

  onAdd: (technology: Technology) => void;
}

const TechnologyCard: FC<TechnologyCardProps> = ({
  technology,
  selectedStack,
  onAdd,
}) => {
  const isAdded = selectedStack.some((item) => item.id === technology.id);

  return (
    <article className="flex min-h-[370px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Icon and Badge */}

      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50">
          <img
            src={technology.icon}
            alt={`${technology.name} logo`}
            className="h-11 w-11 object-contain"
          />
        </div>

        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}

      <h3 className="text-xl font-bold text-slate-800">{technology.name}</h3>

      {/* Description */}

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      {/* Category */}

      <span className="mt-5 w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
        {technology.category}
      </span>

      {/* Difficulty and Rating */}

      <div className="mt-5 flex items-center justify-between gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {technology.difficulty}
        </span>

        <span className="text-sm font-semibold text-amber-500">
          ★ {technology.rating}
        </span>
      </div>

      {/* Add Button */}

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-green-100 text-green-700"
            : "border border-pink-400 text-pink-600 hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-violet-500 hover:text-white"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "+ Add to Stack"}
      </button>
    </article>
  );
};

export default TechnologyCard;
