import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  return (
    <main id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Contact
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Let's start a conversation
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Whether you're seeking exceptional ICT talent or exploring your next
            opportunity, we'd welcome the discussion.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          {/* left side */}
          <div className="grid gap-4">
            {[
              ["Office", "Canberra, Australian Capital Territory"],
              ["Email", "techcommmgmt@bigpond.com"],
              ["Phone", "+61 419 264 620"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5"
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                    {label}
                  </p>
                  <p className="text-lg text-muted-foreground">{value}</p>
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-primary/25 bg-primary/10 p-8 text-sm leading-7 text-muted-foreground">
              We respond to all enquiries promptly and handle all communications
              with discretion.
            </div>
          </div>

          {/* form */}
          <form className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 backdrop-blur transition-all duration-300 hover:border-primary/40 sm:p-10">
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
              </div>

              <Input placeholder="Email address" type="email" />

              <Input placeholder="Organisation" />

              <Textarea
                placeholder="Tell us about your requirement..."
                className="min-h-60"
              />

              <Button className="w-full rounded-full text-base font-semibold">
                Submit enquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
