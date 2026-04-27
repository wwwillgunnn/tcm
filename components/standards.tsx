const standards = [
  {
    number: "I",
    title: "Curated, not catalogued",
    desc: "Every consultant in our network has been personally vetted. We do not operate a database of unknowns, we maintain relationships with proven professionals.",
  },
  {
    number: "II",
    title: "Context before contract",
    desc: "We invest time understanding your program, culture and constraints before recommending anyone. Speed without fit is not a service.",
  },
  {
    number: "III",
    title: "Director-led accountability",
    desc: "Our director remains personally engaged throughout every engagement, not just at signing. Your escalation path is always to someone who cares.",
  },
  {
    number: "IV",
    title: "Honesty as policy",
    desc: "If we cannot identify the right person for your requirement, we will tell you rather than compromise your program with a poor placement.",
  },
];

export default function StandardSection() {
  return (
    <section
      id="standards"
      className="max-w-7xl px-6 py-24 text-foreground text-center sm:py-32"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
        The TCM Standard
      </p>

      <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
        What separates good from{" "}
        <span className="text-primary italic">genuinely excellent.</span>
      </h2>

      <div className="mt-16 grid overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur md:grid-cols-2 lg:grid-cols-4">
        {standards.map((item) => (
          <div
            key={item.number}
            className="group relative min-h-75` border-border p-8 transition-colors hover:bg-primary/6 md:border-r md:last:border-r-0"
          >
            <p className="text-6xl font-serif text-primary/25 transition-colors group-hover:text-primary/60">
              {item.number}
            </p>

            <h3 className="mt-8 text-lg font-semibold text-foreground">
              {item.title}
            </h3>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              {item.desc}
            </p>

            <div className="absolute inset-x-0 bottom-0 h-1 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
