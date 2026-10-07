import Container from "@/components/container";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import { designs } from "@/content/designs";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type DesignPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: DesignPageProps): Promise<Metadata> {
  const { slug } = await params;

  const design = designs.find((item) => item.slug === slug);

  if (!design) {
    return {
      title: "Design Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description =
    design.subtitle ||
    `${design.title} — an engineering and product design project by Gunes Design.`;

  return {
    title: design.title,
    description,

    alternates: {
      canonical: `/designs/${design.slug}`,
    },

    openGraph: {
      title: `${design.title} | Gunes Design`,
      description,
      type: "article",
      url: `/designs/${design.slug}`,
      siteName: "Gunes Design",
    },

    twitter: {
      card: "summary_large_image",
      title: `${design.title} | Gunes Design`,
      description,
    },
  };
}

export default async function DesignPage({
  params,
}: DesignPageProps) {
  const { slug } = await params;

  const design = designs.find((d) => d.slug === slug);

  if (!design) return notFound();
const projectUrl = `https://gunesdesign.com/designs/${design.slug}`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: design.title,
  headline: design.title,
  description:
    design.subtitle ||
    `${design.title}, an engineering and product design project by Gunes Design.`,
  url: projectUrl,
  dateCreated: design.year,
  genre: design.category,
  creator: {
    "@type": "Person",
    name: "Erkin Gunes Dincer",
    jobTitle: "Design Engineer",
    url: "https://gunesdesign.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Gunes Design",
    url: "https://gunesdesign.com",
  },
};
  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
  }}
/>
      <Container>
        <section className="pt-10 pb-6">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.22em] uppercase text-zinc-500">
                  {[design.category, design.year].filter(Boolean).join(" · ")}
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
            <Gallery key={design.slug} items={design.gallery} title={design.title} />
          </div>

<aside className="col-span-12 lg:col-span-4 space-y-6">
  {design.specs.length > 0 && (
    <dl className="rounded-2xl border border-zinc-200 p-5 space-y-5">
      {design.specs.map((spec) => (
        <div key={spec.label}>
          <dt className="text-xs uppercase tracking-widest text-zinc-500">{spec.label}</dt>
          <dd className="mt-2 text-sm leading-6 text-zinc-700">{spec.value}</dd>
        </div>
      ))}
    </dl>
  )}
  {design.slug === "greenhouse-energy-module" && (
  <div className="border border-zinc-200 rounded-2xl p-5">
    <p className="text-xs tracking-[0.22em] uppercase text-zinc-500">
      Project enquiries
    </p>

    <p className="mt-3 text-sm text-zinc-600">
      Project PDF including system overview, simulations, and key drawings.
    </p>

    <a
      href={`mailto:erkingdincer@gmail.com?subject=${encodeURIComponent(design.title + " — project enquiry")}`}
      
      className="mt-4 inline-flex items-center justify-center rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 transition"
    >
      Contact for the details
    </a>
  </div>
)}
{design.slug === "clamp-bracket" && (
  <div className="border border-zinc-200 rounded-2xl p-5">
    <p className="text-xs tracking-[0.22em] uppercase text-zinc-500">
      Project enquiries
    </p>

    <p className="mt-3 text-sm text-zinc-600">
      TV Holder design documentation including CAD drawings,
      assembly layout, and analysis visuals.
    </p>

    <a
      href={`mailto:erkingdincer@gmail.com?subject=${encodeURIComponent(design.title + " — project enquiry")}`}
      
      className="mt-4 inline-flex items-center justify-center rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 transition"
    >
      Contact for the details
    </a>
  </div>
)}
{design.slug === "canary-islands-tram-system" && (
  <div className="border border-zinc-200 rounded-2xl p-5">
    <p className="text-xs tracking-[0.22em] uppercase text-zinc-500">
      Project enquiries
    </p>

    <p className="mt-3 text-sm text-zinc-600">
      Full project documentation including route strategy, system diagrams,
      station concepts, and technical rationale.
    </p>

    <a
    href={`mailto:erkingdincer@gmail.com?subject=${encodeURIComponent(design.title + " — project enquiry")}`}
      
      className="mt-4 inline-flex items-center justify-center rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 transition"
    >
      Contact for the details
    </a>
  </div>
)}
{design.slug === "robot_projectt" && (
  <div className="border border-zinc-200 rounded-2xl p-5">
    <p className="text-xs tracking-[0.22em] uppercase text-zinc-500">
      Project enquiries
    </p>

    <p className="mt-3 text-sm text-zinc-600">
      Full project documentation including  3D CAD modelling and design, development of the product design specifications, components and materials selection.
    </p>

    <a
      href={`mailto:erkingdincer@gmail.com?subject=${encodeURIComponent(design.title + " — project enquiry")}`}
      
      className="mt-4 inline-flex items-center justify-center rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 transition"
    >
      Contact for the details
    </a>
  </div>
)}
</aside>

        </section>
        {["canary-islands-tram-system", "robot_projectt", "greenhouse-energy-module"].includes(design.slug) && (<section className="pb-16">
  <div className="grid grid-cols-12 gap-8 border-t border-zinc-800 pt-10">
    <div className="col-span-12 md:col-span-4">
      <p className="text-xs tracking-[0.22em] uppercase text-zinc-500">
        Project Overview
      </p>
    </div>

    <div className="col-span-12 md:col-span-8 space-y-10">
      {design.overview && (
        <div>
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-3 text-sm md:text-base leading-7 text-zinc-600">
            {design.overview}
          </p>
        </div>
      )}

      {design.challenge && (
        <div>
          <h2 className="text-xl font-semibold">Design Challenge</h2>
          <p className="mt-3 text-sm md:text-base leading-7 text-zinc-600">
            {design.challenge}
          </p>
        </div>
      )}

      {design.approach && (
        <div>
          <h2 className="text-xl font-semibold">Approach</h2>
          <p className="mt-3 text-sm md:text-base leading-7 text-zinc-600">
            {design.approach}
          </p>
        </div>
      )}

      {design.outcome && (
        <div>
          <h2 className="text-xl font-semibold">Outcome</h2>
          <p className="mt-3 text-sm md:text-base leading-7 text-zinc-600">
            {design.outcome}
          </p>
        </div>
      )}

      {design.tools && design.tools.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold">Tools and Methods</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {design.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-600"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
</section>)}
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