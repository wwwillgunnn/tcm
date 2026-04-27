import { Badge } from "@/components/ui/badge";

const industries = [
  "Federal Government",
  "Defence",
  "Financial Services",
  "Telecommunications",
  "Mining & Resources",
  "Banking",
  "Enterprise ICT",
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-28 text-foreground">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          About TCM
        </p>

        <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          26 years of <span className="text-primary">trust</span> in the capital
        </h2>

        <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
          Technology Communications Management Pty Ltd was founded in Canberra
          in 1998 with a clear and unwavering mission: to supply organisations
          with ICT personnel of exceptional quality, matched precisely to their
          needs.
        </p>

        <p className="mt-4 text-lg leading-8 text-muted-foreground sm:text-xl">
          With over{" "}
          <span className="font-semibold text-foreground">
            35 years of ICT leadership experience
          </span>{" "}
          at the director level, we go beyond technical capability, assessing
          cultural fit, communication style, and proven delivery outcomes.
        </p>

        <p className="mt-4 text-lg leading-8 text-muted-foreground sm:text-xl">
          As an Australian SME, we are agile, accountable, and personally
          invested in every engagement. Our Canberra presence places us at the
          heart of the Federal Government technology ecosystem, giving us deep
          insight into the demands of public sector ICT delivery.
        </p>

        {/* badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {industries.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="rounded-full px-4 py-1 text-xs font-medium text-muted-foreground bg-card border border-border hover:text-primary transition"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
