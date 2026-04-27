"use client";

import Navbar from "./navbar";
import { SocialProof } from "./social-proof";
import { Button } from "./ui/button";
import { LightRays } from "./ui/light-rays";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const blurIn = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(16px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      <LightRays />

      <Navbar />

      <section className="relative z-10 mx-10 sm:mx-20 flex h-screen flex-col items-center justify-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
          className="mx-auto flex max-w-5xl flex-col items-center"
        >
          <motion.p
            variants={blurIn}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-5 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary sm:text-sm"
          >
            Trusted ICT recruitment since 1998
          </motion.p>

          <motion.h1
            variants={blurIn}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl bg-linear-to-r from-[#e4cf9c] to-primary bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Elite ICT Talent
          </motion.h1>

          <motion.p
            variants={blurIn}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl"
          >
            Delivering highly specialized ICT personnel and services to
            government and enterprise since 1998
          </motion.p>

          <motion.div
            variants={blurIn}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="rounded-full px-7 text-base font-semibold text-primary-foreground cursor-pointer"
            >
              <Link href="#contact">Get In Touch</Link>
              <ArrowRight className="ml-2 size-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary/60 bg-transparent px-7 text-base font-semibold text-primary hover:bg-primary/10 hover:text-primary cursor-pointer"
            >
              <Link href="#about">Learn More</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={blurIn}
          transition={{ duration: 0.9, delay: 0.75, ease: "easeOut" }}
          className="mt-24 w-full sm:px-80"
        >
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Trusted by government & industry leaders
          </p>

          <SocialProof />
        </motion.div>
      </section>
    </main>
  );
}
