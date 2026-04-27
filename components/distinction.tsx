import { Card, CardContent } from "@/components/ui/card";

const distinctions = [
  {
    number: "01",
    title: "Boutique by design",
    desc: "We are deliberately small so we can be genuinely focused. Every engagement receives personal attention from our director and senior team.",
  },
  {
    number: "02",
    title: "Network of excellence",
    desc: "Built over 26 years, our curated professional network spans defence, government, finance, mining, telecommunications and enterprise technology.",
  },
  {
    number: "03",
    title: "Government-ready credentials",
    desc: "Supplying to Federal Government since 2003, we understand the compliance, security and reporting requirements that public sector engagements demand.",
  },
  {
    number: "04",
    title: "Best-fit, not best-available",
    desc: "We match on skills, culture and context. If we cannot identify the right person, we will tell you — not compromise your program with an unsuitable placement.",
  },
  {
    number: "05",
    title: "Long-term relationships",
    desc: "Our client relationships span decades. We invest in understanding your environment so each successive engagement is more effective than the last.",
  },
];

export default function DistinctionSection() {
  return (
    <section id="distinction" className="px-6 py-24 text-foreground sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Our Distinction
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Not a staffing firm.
            <br />
            <span className="text-primary">A precision partner.</span>
          </h2>

          <p className="mt-7 text-lg leading-8 text-muted-foreground">
            In an industry crowded with volume-focused providers, TCM operates
            differently. We are deliberately boutique, which means every
            engagement receives the full weight of our director&apos;s expertise
            and our curated network of proven ICT professionals.
          </p>

          <blockquote className="mt-8 rounded-2xl border border-primary/25 bg-primary/10 p-6 text-lg font-medium leading-8 text-foreground">
            “We provide only highly skilled, qualified and best-fit personnel
            that exceed client expectations.”
          </blockquote>

          <p className="mt-7 leading-7 text-muted-foreground">
            Our selectivity is our commitment. When we place a consultant, we
            stand behind them. This is the TCM standard, maintained since 1998.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-border md:left-8" />

          <div className="flex flex-col gap-5">
            {distinctions.map((item) => (
              <Card
                key={item.number}
                className="group relative overflow-hidden border-border bg-card/70 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <CardContent className="flex gap-5 p-6 md:p-7">
                  <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background text-sm font-bold text-primary md:size-16 md:text-lg">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-card-foreground md:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted-foreground md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </CardContent>

                <div className="absolute inset-y-0 right-0 w-1 bg-primary/0 transition-colors duration-300 group-hover:bg-primary" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
