import { CircleUserRound } from "lucide-react";

export function AccontButton() {
  return (
    <div>
      <button className="flex items-center gap-2 text-white hover:text-gray-200">
        <span className="font-medium ">Login</span>
        <CircleUserRound className="h-8 w-8" />
      </button>
    </div>
  );
}
