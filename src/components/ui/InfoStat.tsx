import { Icon } from "@/components/Icon";
import type { IconName } from "@/config/assets";

export function InfoStat({
  icon,
  label,
  accentClassName = "text-magenta",
}: {
  icon: IconName;
  label: string;
  accentClassName?: string;
}) {
  return (
    <div className="flex items-center gap-3 border border-off-white/10 bg-ink/40 px-4 py-3">
      <Icon name={icon} className={`size-5 shrink-0 ${accentClassName}`} />
      <span className="text-sm font-medium text-off-white/90">{label}</span>
    </div>
  );
}
