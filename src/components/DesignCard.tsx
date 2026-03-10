import Image from "next/image";
import Link from "next/link";

type Design = {
  title: string;
  slug: string;
  category: string;
  year: string;
  subtitle?: string;
  cover: string;
};

export default function DesignCard({ design }: { design: Design }) {
  return (
    <Link
      href={`/designs/${design.slug}`}
      className="group block border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 transition"
    >
      <div className="relative aspect-[16/10] bg-zinc-50">
        <Image
          src={design.cover}
          alt={design.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"

          sizes="(max-width: 1024px) 100vw, 520px"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold">{design.title}</p>
          <p className="text-xs text-zinc-500">
            {design.category} · {design.year}
          </p>
        </div>

        {design.subtitle ? (
          <p className="mt-2 text-sm text-zinc-600 line-clamp-2">
            {design.subtitle}
          </p>
        ) : null}
      </div>
    </Link>
  );
}

