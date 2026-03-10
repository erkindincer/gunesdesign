"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Item = { src: string; caption: string };

export default function Gallery({ items }: { items: Item[] }) {
  const safeItems = useMemo(() => items ?? [], [items]);
  const [active, setActive] = useState(0);

  const current = safeItems[active];

  if (!safeItems.length) {
    return (
      <div className="border border-zinc-200 rounded-2xl p-6 text-sm text-zinc-600">
        No images in gallery.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="relative w-full aspect-[16/10] border border-zinc-200 rounded-2xl overflow-hidden bg-zinc-50">


        <Image
          src={current.src}
          alt={current.caption}
          fill
          className="object-contain p-4"
          sizes="(max-width: 1024px) 100vw, 900px"
          priority
        />
      </div>

      <p className="text-sm text-zinc-600">{current.caption}</p>

      <div className="grid grid-cols-4 gap-3">
        {safeItems.map((it, idx) => (
          <button
            key={it.src}
            type="button"
            onClick={() => setActive(idx)}
            className={[
              "relative aspect-[4/3] rounded-xl overflow-hidden border bg-zinc-50",
              idx === active ? "border-zinc-950" : "border-zinc-200 hover:border-zinc-300",
            ].join(" ")}
            aria-label={`Open ${it.caption}`}
          >
            <Image
              src={it.src}
              alt={it.caption}
              fill
              className="object-contain p-2"
              sizes="240px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
