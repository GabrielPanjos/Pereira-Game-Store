
import { LinkTitle } from "./LinkTitle";

type LinksStoreProps = {
  title: string;
  children: React.ReactNode;
};

export function LinksStore({ title, children }: LinksStoreProps) {
  return (
    <ul className="flex flex-col gap-1">
      <LinkTitle>{title}</LinkTitle>
      {children}
      
    </ul>
  );
}
