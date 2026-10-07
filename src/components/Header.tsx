import Link from "next/link";
export default function Header() {
  return (
    <header className="border-b border-zinc-200 sticky top-0 bg-white z-50">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight text-black">gunesdesign</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-zinc-600 hover:text-zinc-900 transition">Work</Link>
          <Link href="/about" className="text-zinc-600 hover:text-zinc-900 transition">About</Link>
        </nav>
      </div>
    </header>
  );
}
