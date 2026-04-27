"use client";

import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 text-foreground">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 32, filter: "blur(14px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-6 text-left text-7xl font-bold leading-none text-primary sm:text-8xl"
        >
          “
        </motion.div>

        <blockquote className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl md:leading-tight">
          TCM consistently delivered personnel who were not just technically
          capable, but culturally aligned with our team and the demands of a
          high-security government environment.
        </blockquote>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-12 text-lg text-muted-foreground"
        >
          — Department of Home Affairs
        </motion.p>
      </motion.div>
    </section>
  );
}
