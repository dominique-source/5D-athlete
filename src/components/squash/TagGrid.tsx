import { Icon } from "@/components/Icon";
import type { IconName } from "@/config/assets";

export function TagGrid({
  items,
  accentClassName = "text-magenta",
}: {
  items: { label: string; icon: IconName }[];
  accentClassName?: string;
}) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex flex-col items-center gap-2 border border-off-white/10 bg-charcoal px-3 py-4 text-center"
        >
          <Icon name={item.icon} className={`size-6 ${accentClassName}`} />
          <span className="text-xs font-medium text-off-white/85">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
