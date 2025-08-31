import { Phone } from "lucide-react";

export function Contact() {
  return (
    <button className="flex items-center gap-2 text-white hover:text-gray-200">
      <Phone className="h-7 w-7" />
      <span className="font-medium text-[18px]">Contato</span>
    </button>
  );
}
