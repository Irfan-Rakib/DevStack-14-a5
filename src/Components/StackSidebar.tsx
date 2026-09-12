import type { FC } from "react";

import type { Technology } from "../types/technology";

interface StackSidebarProps {
  selectedStack: Technology[];

  onRemove: (id: string) => void;

  onRemoveAll: () => void;
}

const StackSidebar: FC<StackSidebarProps> = ({
  selectedStack,
  onRemove,
  onRemoveAll,
}) => {
  const technologyCount = selectedStack.length;

  return (
    <aside className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Heading */}

      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Your Stack</h2>

          <p className="mt-1 text-sm text-slate-500">
            {technologyCount === 0
              ? "No technology selected"
              : `${technologyCount} ${
                  technologyCount === 1 ? "Technology" : "Technologies"
                } Selected`}
          </p>
        </div>
      </div>

      {/* Empty State */}

      {technologyCount === 0 && (
        <div className="mt-6 flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 px-5 text-center">
          <div className="mb-4 text-5xl">📦</div>

          <h3 className="font-semibold text-slate-700">Your Stack is Empty</h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Select technologies from the list to build your development stack.
          </p>
        </div>
      )}

      {/* Selected Technologies */}

      {technologyCount > 0 && (
        <div className="mt-6 space-y-3">
          {selectedStack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-8 w-8 object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-slate-800">
                  {technology.name}
                </h3>

                <span className="mt-1 inline-block rounded-md bg-sky-100 px-2 py-0.5 text-[10px] font-medium text-sky-700">
                  {technology.category}
                </span>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
                className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All */}

      <button
        onClick={onRemoveAll}
        className={`mt-6 w-full rounded-xl border py-3 text-sm font-semibold transition ${
          technologyCount === 0
            ? "cursor-not-allowed border-slate-200 text-slate-400"
            : "border-red-300 text-red-500 hover:bg-red-50"
        }`}
        disabled={technologyCount === 0}
      >
        Remove All
      </button>
    </aside>
  );
};

export default StackSidebar;
