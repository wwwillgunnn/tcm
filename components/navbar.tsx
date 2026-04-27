"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Clients", href: "#" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: scrolled ? 12 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`z-50 w-full px-6 py-5 transition-all duration-300 ${
        scrolled ? "fixed left-0 top-0" : "relative"
      }`}
    >
      <motion.nav
        animate={{
          maxWidth: scrolled ? 760 : 1280,
          paddingLeft: scrolled ? 18 : 20,
          paddingRight: scrolled ? 18 : 20,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`mx-auto flex items-center gap-5 overflow-x-auto px-5 py-3 transition-all duration-300 md:grid md:grid-cols-[1fr_auto_1fr] md:overflow-visible ${
          scrolled
            ? "rounded-full border border-white/15 bg-background/45 shadow-lg shadow-black/20 backdrop-blur-xl"
            : ""
        }`}
      >
        <a href="/" className="shrink-0 md:justify-self-start">
          <span className="text-lg font-semibold tracking-tight">TCM</span>
        </a>

        <div className="flex shrink-0 items-center gap-5 md:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-muted-foreground transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button className="shrink-0 rounded-full px-5 font-semibold md:justify-self-end">
          <Link href="#contact">Get In Touch</Link>
        </Button>
      </motion.nav>
    </motion.header>
  );
}
