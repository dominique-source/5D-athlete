export function PricingCard({
  title,
  price,
  priceNote,
  features,
  accentClassName = "border-magenta text-magenta",
  highlighted = false,
}: {
  title: string;
  price: string;
  priceNote?: string;
  features: string[];
  accentClassName?: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-4 border p-6 sm:p-7 ${
        highlighted ? accentClassName : "border-off-white/15"
      }`}
    >
      <h3 className="text-2xl">{title}</h3>
      <div>
        <span className="font-display text-4xl italic">{price}</span>
        {priceNote && <p className="mt-1 text-xs text-off-white/60">{priceNote}</p>}
      </div>
      <ul className="mt-2 space-y-2 text-sm text-off-white/85">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-0.5 text-magenta">
              —
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
