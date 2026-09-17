export function DemoBanner({ text }: { text: string }) {
  return (
    <div
      role="status"
      className="border border-blue/40 bg-blue/10 px-4 py-3 text-sm text-off-white/90"
    >
      <span className="mr-2 font-semibold uppercase tracking-wide text-blue">
        Mode démonstration
      </span>
      {text}
    </div>
  );
}
