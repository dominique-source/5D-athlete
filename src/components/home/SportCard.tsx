import Image from "next/image";
import Link from "next/link";

type SportCardProps = {
  title: string;
  image: string;
  href?: string;
  comingSoon?: boolean;
};

export function SportCard({ title, image, href, comingSoon }: SportCardProps) {
  const content = (
    <>
      <div className="relative aspect-4/5 w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} — 5D Athlete`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-transform duration-500 ${
            comingSoon ? "opacity-45" : "group-hover:scale-105"
          }`}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,6,7,0) 40%, rgba(5,6,7,0.9) 100%)",
          }}
        />
        {comingSoon && (
          <span className="absolute top-4 left-4 border border-off-white/50 bg-ink/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-off-white/80">
            En développement
          </span>
        )}
      </div>
      <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-5">
        <h3 className="text-xl">{title}</h3>
        {!comingSoon && (
          <span
            aria-hidden="true"
            className="text-magenta transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        )}
      </div>
    </>
  );

  if (comingSoon || !href) {
    return (
      <div
        className="group relative block cursor-default overflow-hidden border border-off-white/10"
        aria-disabled="true"
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="group relative block overflow-hidden border border-off-white/10 transition-colors hover:border-magenta focus-visible:border-magenta"
    >
      {content}
    </Link>
  );
}
