import Image from "next/image";
import { Icon } from "@/components/Icon";
import { assets } from "@/config/assets";
import type { IconName } from "@/config/assets";

type Dimension = {
  label: string;
  icon: IconName;
  top: number;
  left: number;
};

const DIMENSIONS: Dimension[] = [
  { label: "Skills", icon: "skills", top: 37, left: 10 },
  { label: "Decision Making", icon: "decision", top: 37, left: 90 },
  { label: "Community", icon: "community", top: 84, left: 75 },
  { label: "Mind", icon: "mind", top: 84, left: 25 },
  { label: "Soul", icon: "soul", top: 8, left: 50 },
];

export function DimensionOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {DIMENSIONS.map((dimension, index) => (
          <line
            key={dimension.label}
            x1="50"
            y1="50"
            x2={dimension.left}
            y2={dimension.top}
            stroke="var(--color-magenta)"
            strokeWidth="0.3"
            strokeDasharray="2 2"
            className="animate-pulse-line"
            style={{ animationDelay: `${index * 0.3}s` }}
          />
        ))}
      </svg>

      <div className="absolute top-1/2 left-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-magenta shadow-[0_0_60px_rgba(255,19,93,0.25)]">
        <Image
          src={assets.homeHero}
          alt="Athlète 5D au centre des cinq dimensions"
          fill
          sizes="(min-width: 640px) 320px, 60vw"
          className="object-cover"
          priority
        />
      </div>

      {DIMENSIONS.map((dimension, index) => (
        <div
          key={dimension.label}
          className="animate-orbit-in absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          style={{
            top: `${dimension.top}%`,
            left: `${dimension.left}%`,
            animationDelay: `${0.4 + index * 0.12}s`,
          }}
        >
          <span className="flex size-11 items-center justify-center rounded-full border border-magenta/60 bg-ink sm:size-14">
            <Icon name={dimension.icon} className="size-5 text-magenta sm:size-6" />
          </span>
          <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-wide text-off-white/90 sm:text-xs">
            {dimension.label}
          </span>
        </div>
      ))}
    </div>
  );
}
