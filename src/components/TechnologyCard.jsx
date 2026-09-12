import { Star } from "lucide-react";

export const TechnologyCard = ({
  technology,
  selectedStack = [],
  onAdd,
}) => {
  const isAdded = selectedStack.some(
    (item) => item.id === technology.id
  );

  return (
    <div
      className={`rounded-xl border-3 bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,0.03)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(15,23,42,0.06)] ${
        isAdded
          ? "border-pink-400"
          : "border-[#E8ECF2]"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-[35px] w-[35px] items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-[#EEF8FF] px-3 py-1 text-[10px] font-medium text-[#0095E8]">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-[18px] font-bold leading-5 text-[#172033]">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-[48px] text-[12px] leading-[19px] text-[#64748B]">
        {technology.description}
      </p>

      <div className="mt-3 border-t border-[#EEF1F5] pt-3">
        <div className="flex items-center justify-between">
          <span className="rounded bg-[#F1F4F7] px-2 py-1 text-[11px] text-[#64748B]">
            {technology.category}
          </span>

          <span className="text-[12px] text-[#64748B]">
            {technology.difficulty}
          </span>

          <div className="flex items-center gap-1 text-[12px] text-[#334155]">
            <Star
              size={12}
              className="fill-[#FFB800] text-[#FFB800]"
            />
            <span>{technology.rating}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-3 h-9 w-full rounded-md text-[11px] font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-[#f5c8de] text-[#111827]"
            : "bg-[#080D1B] text-white hover:bg-[#111827]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};