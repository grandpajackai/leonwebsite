export default function PlaceholderPhoto({
  label,
  dark = false,
  className = "",
}: {
  label: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-center bg-cover p-5 text-center font-mono text-[10px] font-medium leading-[1.7] tracking-[.08em] ${
        dark ? "bg-stripe-dark text-white/50" : "bg-stripe-light text-black/42"
      } ${className}`}
    >
      {label}
    </div>
  );
}
