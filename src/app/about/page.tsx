export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      
      <h1 className="text-3xl font-semibold tracking-tight">
        About Me
      </h1>

      <p className="mt-6 text-zinc-600 leading-relaxed">
        I am an engineering design graduate focused on mechanical systems,
        robotics and product development. My work combines technical
        engineering principles with practical design solutions, aiming to
        create functional and manufacturable systems.
      </p>

      <p className="mt-4 text-zinc-600 leading-relaxed">
        My interests include robotics, mechanical product design, mobility
        systems and engineering innovation. I enjoy working on projects that
        integrate structural design, system thinking and real-world
        problem solving.
      </p>
<div className="mt-10">
  <a
    href="https://www.linkedin.com/in/erkin-gunes-dincer-851b99210"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded-xl border border-zinc-300 px-4 py-2 text-sm text-white hover:bg-zinc-800 transition"
  >
    LinkedIn Profile →
  </a>
</div>
      <div className="mt-10">
        <a
          href="/files/erkin-dincer-cv.pdf"
          download
          className="inline-flex items-center rounded-xl border border-zinc-300 px-4 py-2 text-sm text-white hover:bg-zinc-800 transition"
        >
          Download CV (PDF) →
        </a>
      </div>

    </main>
  );
}