import type { IconName } from "@/config/assets";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "size-5" }: IconProps) {
  return (
    <svg className={className} aria-hidden="true" focusable="false">
      <use href={`#${name}`} />
    </svg>
  );
}
