type AboutListProps = {
  children: string | React.ReactNode;
};

export function AboutList({ children }: AboutListProps) {
  return <li>{children}</li>;
}
