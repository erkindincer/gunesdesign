import Link from "next/link";
import Container from "./container";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">


      <Container>
        <div className="h-14 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-wide">
            {/*gunesdesign*/}
          </Link>

          <nav className="flex items-center gap-4 text-sm text-zinc-700">
            <a className="hover:text-zinc-950" href="/#designs">
              {/*Designs*/}
            </a>
            <a className="hover:text-zinc-950" href="/#contact">
              {/*Contact*/}
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
