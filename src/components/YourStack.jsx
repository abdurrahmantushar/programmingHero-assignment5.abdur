import { X, Trash2 } from "lucide-react";
import { StackItem } from "./StackItem";

export const YourStack = ({
  selectedStack,
  onRemove,
  onRemoveAll,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <h3 className="text-base font-semibold text-[#111827]">
        Your Stack
      </h3>

      <p className="mt-1 text-xs text-gray-400">
        {selectedStack.length} Technology Selected
      </p>

      {selectedStack.length === 0 ? (
        <div className="mt-4 flex h-24 items-center justify-center rounded-lg border border-dashed border-gray-200 text-xs text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="mt-4 space-y-2">
        {selectedStack.map((technology) => (
        <StackItem
            key={technology.id}
            technology={technology}
            onRemove={onRemove}
        />
        ))}

          <button
            onClick={onRemoveAll}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-pink-200 py-2 text-xs font-medium text-pink-500 transition hover:bg-pink-50"
          >
            <Trash2 size={14} />
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};