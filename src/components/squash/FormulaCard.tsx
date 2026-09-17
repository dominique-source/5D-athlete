import Image from "next/image";
import Link from "next/link";

export function FormulaCard({
  title,
  tagline,
  image,
  href,
  accentClassName,
}: {
  title: string;
  tagline: string;
  image: string;
  href: string;
  accentClassName: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden border border-off-white/10 transition-colors hover:border-current ${accentClassName}`}
    >
      <div className="relative aspect-3/4 w-full">
        <Image
          src={image}
          alt={`${title} — 5D Squash`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,6,7,0.05) 30%, rgba(5,6,7,0.95) 100%)",
          }}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-current">
          {tagline}
        </p>
        <h3 className="mt-1 text-3xl text-off-white">{title}</h3>
        <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-off-white/90">
          Découvrir
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
