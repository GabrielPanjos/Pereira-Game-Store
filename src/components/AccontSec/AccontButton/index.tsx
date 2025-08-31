import { CircleUserRound } from "lucide-react";

export function AccontButton() {
  return (
    <div>
      <button className="flex items-center gap-2 text-white hover:text-gray-200">
        <CircleUserRound className="h-8 w-8" />
        <span className="font-medium text-[18px]">Login</span>
      </button>
    </div>
  );
}
