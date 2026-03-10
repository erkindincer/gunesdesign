import Container from "@/components/container";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import { designs } from "@/content/designs";
import Link from "next/link";
import { notFound } from "next/navigation";

// Next.js 15+ için params bir Promise olarak gelir, bu yüzden async kullanıyoruz.
export default async function DesignPage({ params }: { params: Promise<{ slug: string }> }) {
  // 1. Params'ı asenkron olarak çözüyoruz
  const { slug } = await params;

  // 2. Veriyi slug üzerinden buluyoruz
  const design = designs.find((d) => d.slug === slug);

  // 3. Tasarım bulunamazsa 404 sayfasına yönlendiriyoruz
  if (!design) return notFound();

  return (
    <main>
      <Container>
        <section className="pt-10 pb-6">
          <Reveal>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.22em] uppercase text-zinc-500">
                  {design.category} · {design.year}
                </p>

                <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-[1.05]">
                  {design.title}
                </h1>

                {design.subtitle && (
                  <p className="mt-4 text-base md:text-lg text-zinc-600 max-w-2xl">
                    {design.subtitle}
                  </p>
                )}
              </div>

              <Link
                href="/#designs"
                className="shrink-0 rounded-full border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-50 transition-colors"
              >
                Back
              </Link>
            </div>
          </Reveal>
        </section>

        <section className="pb-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            {/* Gallery bileşeni design.gallery (resim listesi) ile besleniyor */}
            <Gallery items={design.gallery} />
          </div>

<aside className="col-span-12 lg:col-span-4 space-y-6">
  {design.slug === "greenhouse-energy-module" && (
  <div className="border border-zinc-200 rounded-2xl p-5">
    <p className="text-xs tracking-[0.22em] uppercase text-zinc-500">
      Download
    </p>

    <p className="mt-3 text-sm text-zinc-600">
      Project PDF including system overview, simulations, and key drawings.
    </p>

    <a
      //href="/files/greenhouse-project.pdf"
      
      className="mt-4 inline-flex items-center justify-center rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 transition"
    >
      Contact for the details
    </a>
  </div>
)}
{design.slug === "clamp-bracket" && (
  <div className="border border-zinc-200 rounded-2xl p-5">
    <p className="text-xs tracking-[0.22em] uppercase text-zinc-500">
      Download
    </p>

    <p className="mt-3 text-sm text-zinc-600">
      TV Holder design documentation including CAD drawings,
      assembly layout, and analysis visuals.
    </p>

    <a
      //href="/files/tv-holder-project.pdf"
      
      className="mt-4 inline-flex items-center justify-center rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 transition"
    >
      Contact for the details
    </a>
  </div>
)}
{design.slug === "canary-islands-tram-system" && (
  <div className="border border-zinc-200 rounded-2xl p-5">
    <p className="text-xs tracking-[0.22em] uppercase text-zinc-500">
      Download
    </p>

    <p className="mt-3 text-sm text-zinc-600">
      Full project documentation including route strategy, system diagrams,
      station concepts, and technical rationale.
    </p>

    <a
    //href="/files/canary-islands-tram-system.pdf"
      
      className="mt-4 inline-flex items-center justify-center rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 transition"
    >
      Contact for the details
    </a>
  </div>
)}
{design.slug === "robot_projectt" && (
  <div className="border border-zinc-200 rounded-2xl p-5">
    <p className="text-xs tracking-[0.22em] uppercase text-zinc-500">
      Download
    </p>

    <p className="mt-3 text-sm text-zinc-600">
      Full project documentation including  3D CAD modelling and design, development of the product design specifications, components and materials selection.
    </p>

    <a
      ///href="/files/robot_project.pdf"
      
      className="mt-4 inline-flex items-center justify-center rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 transition"
    >
      Contact for the details
    </a>
  </div>
)}
</aside>

        </section>
      </Container>
    </main>
  );
}
/**
 * Bu fonksiyon tüm slug'ları önceden Next.js'e bildirir. 
 * Böylece sayfalar Build anında oluşturulur ve 404 hataları önlenir.
 */
export async function generateStaticParams() {
  return designs.map((design) => ({
    slug: design.slug,
  }));
}