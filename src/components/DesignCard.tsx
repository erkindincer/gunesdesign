import Image from "next/image";
import Link from "next/link";
type Design = { title: string; slug: string; category: string; year?: string; subtitle?: string; cover: string; };
export default function DesignCard({ design }: { design: Design }) {
  return (
    <Link href={`/designs/${design.slug}`} className="group block border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 transition">
      <div className="relative aspect-[16/10] bg-zinc-50">
        <Image src={design.cover} alt={design.title} fill className="object-contain p-3 transition-transform duration-500 motion-safe:group-hover:scale-[1.02]" sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc((100vw - 56px) / 2), (max-width: 1152px) calc((100vw - 80px) / 3), 358px" />
      </div>
      <div className="p-4"><div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold">{design.title}</p>
        <p className="text-xs text-zinc-500">{[design.category, design.year].filter(Boolean).join(" · ")}</p>
      </div>{design.subtitle ? <p className="mt-2 text-sm text-zinc-600 line-clamp-2">{design.subtitle}</p> : null}</div>
    </Link>
  );
}
