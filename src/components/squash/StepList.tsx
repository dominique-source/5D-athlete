export function StepList({
  steps,
  accentClassName = "text-magenta border-magenta",
}: {
  steps: string[];
  accentClassName?: string;
}) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step} className="border border-off-white/10 bg-charcoal p-5">
          <span
            className={`flex size-8 items-center justify-center border text-sm font-bold ${accentClassName}`}
          >
            {index + 1}
          </span>
          <p className="mt-3 text-sm font-semibold text-off-white/90">{step}</p>
        </li>
      ))}
    </ol>
  );
}
