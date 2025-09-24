type InputProps = React.ComponentProps<"input">;

export function Input(props: InputProps) {
  return (
    <input
      className="border font-bold text-gray-800 text-[14px] pl-4 pr-4 h-12 w-full border-gray-300 rounded"
      {...props}
    />
  );
}
