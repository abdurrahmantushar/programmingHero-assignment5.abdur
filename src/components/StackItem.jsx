import { X } from "lucide-react";

export const StackItem = ({ technology, onRemove }) => {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-50">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-6 w-6 object-contain"
        />
      </div>

      <div className="flex-1">
        <h4 className="text-[15px] font-semibold text-[#111827]">
          {technology.name}
        </h4>

        <p className="mt-0.5 text-xs font-semibold text-gray-400">
          {technology.category}
        </p>
      </div>

      <button
        onClick={() => onRemove(technology.id)}
        className="text-gray-400 transition hover:text-pink-500"
      >
        <X size={16} />
      </button>
    </div>
  );
};