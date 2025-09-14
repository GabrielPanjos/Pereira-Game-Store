type TopicProps = {
  title: string;
  children: string | React.ReactNode;
};

export function Topic({ title, children }: TopicProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-[28px] text-sky-950">{title}</h2>
      <p className="text-2xl text-slate-900">{children}</p>
    </div>
  );
}
