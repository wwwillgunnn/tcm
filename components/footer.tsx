import Link from "next/link";

const serviceLinks = [
  "Governance & Strategy",
  "Infrastructure Management",
  "Applications & Development",
  "Platform Specialists",
  "Service Delivery",
  "Transitions",
];

const companyLinks = ["About TCM", "Our Director", "Clients", "Procurement"];

const engageLinks = [
  "Contact Us",
  "Government Panel",
  "Consultant Network",
  "Privacy Policy",
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-background py-14 text-foreground sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="font-serif text-2xl text-primary">TCM</h2>

            <p className="mt-6 max-w-xs text-sm leading-7 text-muted-foreground">
              Boutique supplier of quality ICT personnel and services to
              Government and industry. Canberra, Australia.
            </p>

            <div className="mt-6 text-xs leading-6 text-muted-foreground">
              <p>Technology Communications Management Pty Ltd</p>
              <p>ABN: 78 083 902 783</p>
            </div>
          </div>

          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Engage" links={engageLinks} />
        </div>
      </div>

      <div className="mt-16 border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © 2024 Technology Communications Management Pty Ltd. All rights
            reserved.
          </p>

          <p className="font-mono uppercase tracking-[0.25em]">
            Australian SME · Est. 1998 · Canberra ACT
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
        {title}
      </h3>

      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link}
            href="#"
            className="text-sm text-muted-foreground transition hover:text-primary"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
