import Container from "@/components/container";
import DesignCard from "@/components/DesignCard";
import Reveal from "@/components/Reveal";
import { designs } from "@/content/designs";


export default function HomePage() {
  return (
    <main>
      <Container>
 {/* HERO */}
<section className="pt-10 pb-6">
  <Reveal>
    <div className="grid grid-cols-12 gap-6 items-end">
      <div className="col-span-12 md:col-span-7">
        <p className="text-xs tracking-[0.22em] uppercase text-zinc-500 mb-4">
          PORTFOLIO / EDITORIAL
        </p>
    <section className="mt-16">
      
    </section>
    
        {/* BAŞLIK VE BUTONLARI AYNI SATIRA ALAN FLEX BOX */}
        <div className="flex items-center justify-center py-1">
          <h1 className="text-4xl md:text-4xl font-serif italic text-zinc-200 tracking-tight">
            gunesdesign
          </h1>

          <div className="flex items-center gap-4">
            <a
              href=""
              className="flex items-center justify--zinc-300 px-5 py-2 text-sm hover:bg-zinc-50 transition font-medium"
            >
              {/*View designs*/}
            </a>

            <a
              href="#contact"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition font-medium border-b border-transparent hover:border-zinc-400"
            >
             {/* Contact*/}
            </a>
          </div>
        </div>

        <p className="mt-0 text-base md:text-lg text-zinc-600 max-w-xl">
          {/* Intro metnini buraya ekleyebilirsin */}
        </p>
      </div>

      <div className="col-span-12 md:col-span-5" />
    </div>
  </Reveal>
</section>


{/* DESIGNS GRID */}
<section id="designs" className="py-12">
  <div className="flex items-end justify-between gap-3 mb-8">
    <div>
      {/* Yazıyı büyüttük, fontu kalınlaştırdık ve çerçeve varsa sildik */}
      <p className="text-sm md:text-base font-bold tracking-[0.25em] uppercase text-zinc-900">
        
      </p>
      
      {/* Alt başlığı da bir tık büyüterek dengeyi sağladık */}
<h2 className="mt-2 text-lg md:text-xl font-medium">
  Designs
</h2>

    </div>

    <p className="hidden md:block text-sm text-zinc-2000">
      Click a card to explore
    </p>
  </div>

  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {designs.map((d) => (
      <DesignCard key={d.slug} design={d} />
    ))}
  </div>
</section>

        {/* CONTACT */}
        <section id="contact" className="py-12">
          <div className="border border-zinc-200 rounded-2xl p-6 md:p-8">
<h2 className="mt-2 text-lg md:text-xl font-medium">
  Contact
</h2>


            <h3 className="mt-1 text-2xl font-semibold">

            </h3>

            <div className="mt-2 grid grid-cols-12 gap-0">
              <div className="col-span-12 md:col-span-7">
                <p className="text-sm text-zinc-700">
          
                </p>

                <div className="mt-6 space-y-2 text-sm">
                  <p>
                    <span className="text-zinc-500">Email:</span>{" "}
                    <span className="font-medium">erkingdincer@gmail.com</span>
                  </p>
                  <p>
                    <span className="text-zinc-500">Phone:</span>{" "}
                    <span className="font-medium">+44 7904 292378</span>
                  </p>
                  <p>
                    <span className="text-zinc-500">Location:</span>{" "}
                    <span className="font-medium">London, UK</span>
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-5">
                <div className="rounded-xl bg-zinc-950 text-white p-5">
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
    
  );

}
