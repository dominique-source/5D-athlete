import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "corpo";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-magenta text-ink hover:bg-off-white disabled:bg-off-white/20 disabled:text-off-white/40",
  secondary:
    "bg-off-white text-ink hover:bg-magenta hover:text-ink disabled:bg-off-white/20 disabled:text-off-white/40",
  outline:
    "border border-off-white/40 text-off-white hover:border-magenta hover:text-magenta disabled:border-off-white/15 disabled:text-off-white/30",
  corpo:
    "bg-copper text-ink hover:bg-off-white disabled:bg-off-white/20 disabled:text-off-white/40",
};

const BASE =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-colors focus-visible:outline-2 focus-visible:outline-magenta disabled:cursor-not-allowed";

export function Button({
  variant = "primary",
  className = "",
  loading = false,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  loading?: boolean;
}) {
  return (
    <button
      className={`${BASE} ${VARIANT_CLASSES[variant]} ${className}`}
      disabled={props.disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? "Envoi en cours…" : children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${BASE} ${VARIANT_CLASSES[variant]} ${className}`}>
      {children}
    </Link>
  );
}
