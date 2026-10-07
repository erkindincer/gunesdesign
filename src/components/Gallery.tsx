"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Item = { src: string; caption: string };

export default function Gallery({ items, title }: { items: Item[]; title: string }) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const swiped = useRef(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const current = items[active] ?? items[0];
  const label = current ? `${title} — ${current.caption || `Image ${active + 1}`}` : title;

  function move(direction: number) {
    if (items.length > 1) setActive((value) => (value + direction + items.length) % items.length);
  }

  useEffect(() => {
    if (!expanded) return;
    const element = dialog.current;
    const opener = trigger.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    };
  }, [expanded]);

  if (!current) {
    return <p className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-600">No images in gallery.</p>;
  }

  const controls = (
    <div className="flex items-center gap-3">
      <button type="button" onClick={() => move(-1)} disabled={items.length < 2} aria-label="Previous image" className="min-h-11 min-w-11 rounded-full border border-zinc-300 bg-white text-xl hover:bg-zinc-100 disabled:opacity-40">←</button>
      <span className="min-w-12 text-center text-sm tabular-nums" aria-live="polite" aria-atomic="true">{active + 1} / {items.length}</span>
      <button type="button" onClick={() => move(1)} disabled={items.length < 2} aria-label="Next image" className="min-h-11 min-w-11 rounded-full border border-zinc-300 bg-white text-xl hover:bg-zinc-100 disabled:opacity-40">→</button>
    </div>
  );

  return (
    <div className="space-y-4" onKeyDown={(event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
    }}>
      <button
        ref={trigger}
        type="button"
        onClick={() => { if (swiped.current) { swiped.current = false; return; } setExpanded(true); }}
        aria-label={`Enlarge ${label}`}
        aria-haspopup="dialog"
        className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 sm:aspect-[16/10]"
        onTouchStart={(event) => { swiped.current = false; touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
        onTouchEnd={(event) => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start) return;
          const dx = event.changedTouches[0].clientX - start.x;
          const dy = event.changedTouches[0].clientY - start.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) { swiped.current = true; move(dx < 0 ? 1 : -1); }
        }}
      >
        <Image src={current.src} alt={label} fill className="object-contain p-2 sm:p-4" sizes="(max-width: 1023px) calc(100vw - 32px), 740px" priority />
        <span className="absolute right-3 bottom-3 rounded-full border border-zinc-200 bg-white/95 px-3 py-2 text-xs text-zinc-700 shadow-sm">View larger ↗</span>
      </button>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-zinc-600">{current.caption || title}</p>
        {controls}
      </div>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 sm:gap-3" aria-label={`${title} thumbnails`}>
        {items.map((item, index) => (
          <button key={`${item.src}-${index}`} type="button" onClick={() => setActive(index)} aria-label={`Show ${title} — ${item.caption || `image ${index + 1}`}`} aria-pressed={index === active} className={`relative aspect-[4/3] overflow-hidden rounded-lg border bg-zinc-50 transition-colors ${index === active ? "border-zinc-900 ring-1 ring-zinc-900" : "border-zinc-200 hover:border-zinc-500"}`}>
            <Image src={item.src} alt="" fill className="object-contain p-1.5" sizes="(max-width: 639px) 25vw, (max-width: 1023px) 20vw, 140px" />
          </button>
        ))}
      </div>
      <dialog ref={dialog} aria-label={`${title} image viewer`} onCancel={() => setExpanded(false)} onClose={() => setExpanded(false)} className="fixed inset-0 m-auto h-[92dvh] max-h-none w-[96vw] max-w-7xl overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 text-zinc-950 shadow-2xl sm:p-5">
        {expanded && <div className="flex h-full flex-col gap-3">
          <div className="flex items-center justify-between gap-4">
            <p className="truncate text-sm font-medium">{title}</p>
            <button type="button" autoFocus onClick={() => setExpanded(false)} className="min-h-11 shrink-0 rounded-full border border-zinc-300 px-4 text-sm hover:bg-zinc-100">Close ×</button>
          </div>
          <div className="relative min-h-0 flex-1 rounded-xl bg-zinc-50">
            <Image src={current.src} alt={label} fill className="object-contain" sizes="96vw" />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a href={current.src} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4">Open original ↗</a>
            {controls}
          </div>
        </div>}
      </dialog>
    </div>
  );
}
