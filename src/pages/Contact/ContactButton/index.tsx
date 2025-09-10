import type { LucideProps } from "lucide-react";

type ContactButtonProps = {
  children: string;
  href: string;
  Icon: React.ComponentType<LucideProps>;
};

export function ContactButton({ children, href, Icon }: ContactButtonProps) {
  return (
    <a
      className=" flex flex-col justify-center items-center w-30"
      aria-label={children}
      target="_blank"
      href={href}
      rel="noopener noreferrer"
    >
      <Icon className="h-[40px] w-[40px]" />
      <span className="font-bold text-[22px]">{children}</span>
    </a>
  );
}
