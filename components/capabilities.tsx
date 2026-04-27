const capabilities = [
  {
    number: "01",
    title: "Governance & Strategic Planning",
    desc: "Major Program and Project management and execution. We provide the experienced leaders who can navigate complex, multi-stakeholder programs with rigour and discipline.",
  },
  {
    number: "02",
    title: "ICT Infrastructure Management",
    desc: "Testing, technical specification, business case writing, user support, transition and outsource management. From procurement strategy through to go-live.",
  },
  {
    number: "03",
    title: "Applications Management & Development",
    desc: "Development, implementation, change management and business support including analysis, documentation production and stakeholder engagement.",
  },
  {
    number: "04",
    title: "Platform Specialists",
    desc: "Deep expertise in SAP CRM and ERP implementations. Our specialists bring hands-on delivery experience across complex enterprise platform environments.",
  },
  {
    number: "05",
    title: "Service Delivery & Security",
    desc: "Requirements analysis, software testing, technical documentation, change management and solution architecture, with a security-conscious approach throughout.",
  },
  {
    number: "06",
    title: "Internet & Multimedia",
    desc: "Presentation layer architecture, UX and usability modelling, capability and content design, and interface design for digital service delivery.",
  },
  {
    number: "07",
    title: "Transition Specialists",
    desc: "Transition to and from major capabilities, insource and outsource operations. We manage the complexity of change so your operations remain uninterrupted. Our network allows us to augment supply rapidly when scale demands it.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="services" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary text-center">
          What we deliver
        </p>

        <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl">
          Capabilities across <br />
          the <span className="text-primary">full ICT spectrum.</span>
        </h2>

        <div className="mt-16 grid gap-3 md:grid-cols-3">
          {capabilities.map((item, index) => (
            <div
              key={item.number}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg sm:p-12 ${
                index === 6 ? "md:col-span-3" : ""
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <p className="mb-8 font-mono text-xs tracking-[0.25em] text-primary">
                  {item.number}
                </p>

                <h3 className="font-serif text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
