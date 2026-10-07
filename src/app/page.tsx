import Container from "@/components/container";
import DesignCard from "@/components/DesignCard";
import Reveal from "@/components/Reveal";
import { designs } from "@/content/designs";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org", "@type": "WebSite", name: "Gunes Design", alternateName: "gunesdesign", url: "https://gunesdesign.com",
    description: "Engineering and product design portfolio by Erkin Gunes Dincer, featuring CAD modelling, product development, sustainable engineering and digital design projects.",
    author: { "@type": "Person", name: "Erkin Gunes Dincer", jobTitle: "Design Engineer", url: "https://gunesdesign.com/about", sameAs: [] },
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <Container>
        <section className="pt-16 pb-20">
          <Reveal><div className="flex justify-center"><div className="w-full max-w-3xl text-center">
            <p className="text-xs tracking-[0.22em] uppercase text-zinc-500">Portfolio / Editorial</p>
            <div className="mt-12">
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-zinc-950">Gunes Design</h1>
              <p className="mt-5 mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-zinc-600">Engineering and product design portfolio by Erkin Gunes Dincer.</p>
              <p className="mt-3 mx-auto max-w-2xl text-sm md:text-base leading-relaxed text-zinc-500">Exploring product development, CAD modelling, sustainable engineering, visual design and digital systems.</p>
            </div>
          </div></div></Reveal>
        </section>
        <section id="designs" className="py-12">
          <div className="flex items-end justify-between gap-3 mb-8"><div><h2 className="mt-2 text-lg md:text-xl font-medium">Designs</h2></div><p className="hidden md:block text-sm text-zinc-500">Click a card to explore</p></div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{designs.map((d) => <DesignCard key={d.slug} design={d} />)}</div>
        </section>
        <section id="contact" className="py-12"><div className="border border-zinc-200 rounded-2xl p-6 md:p-8">
          <h2 className="mt-2 text-lg md:text-xl font-medium">Contact</h2>
          <div className="mt-2 grid grid-cols-12 gap-0"><div className="col-span-12 md:col-span-7"><div className="mt-6 space-y-2 text-sm">
            <p><span className="text-zinc-500">Email:</span>{" "}<a className="font-medium underline underline-offset-4" href="mailto:erkingdincer@gmail.com">erkingdincer@gmail.com</a></p>
            <p><span className="text-zinc-500">Phone:</span>{" "}<a className="font-medium underline underline-offset-4" href="tel:+447904292378">+44 7904 292378</a></p>
            <p><span className="text-zinc-500">Location:</span>{" "}<span className="font-medium">London, UK</span></p>
          </div></div></div>
        </div></section>
      </Container>
    </main>
  );
}
