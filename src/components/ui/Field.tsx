import type { ReactNode } from "react";

type FieldProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

export function Field({ label, name, required, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wide text-off-white/70">
        {label}
        {required && <span className="ml-1 text-magenta">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs font-medium text-magenta">
          {error}
        </p>
      )}
    </div>
  );
}

const CONTROL_CLASSES =
  "w-full border border-off-white/25 bg-charcoal px-3.5 py-2.5 text-sm text-off-white placeholder:text-off-white/40 focus-visible:border-magenta focus-visible:outline-none";

export function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  return <input {...props} className={`${CONTROL_CLASSES} ${props.className ?? ""}`} />;
}

export function Select(
  props: React.SelectHTMLAttributes<HTMLSelectElement>,
) {
  return <select {...props} className={`${CONTROL_CLASSES} ${props.className ?? ""}`} />;
}

export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>,
) {
  return (
    <textarea
      {...props}
      className={`${CONTROL_CLASSES} min-h-24 ${props.className ?? ""}`}
    />
  );
}
