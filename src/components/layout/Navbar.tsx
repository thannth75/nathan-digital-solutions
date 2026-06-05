"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

const NAV_LINKS = [
  { name: "Início", path: "/" },
  { name: "Sobre Mim", path: "/sobre" },
  { name: "Currículo", path: "/curriculo" },
  { name: "Projetos", path: "/projetos" },
  { name: "Moto Express", path: "/moto-express" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-[var(--glass-bg)] backdrop-blur-md border-[var(--glass-border)] py-4 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="font-heading font-bold text-xl tracking-tight">
            Nathan<span className="text-[var(--color-primary)]">.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white relative",
                  isActive ? "text-white" : "text-[var(--color-text-muted)]"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[var(--color-primary)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="premium" size="sm">
            Falar no WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[var(--color-surface)] border-b border-[var(--color-border)] p-4 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium p-2 rounded-md transition-colors",
                    pathname === link.path
                      ? "bg-[var(--glass-bg)] text-white"
                      : "text-[var(--color-text-muted)] hover:bg-[var(--glass-bg)] hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="premium" className="w-full mt-4">
                Falar no WhatsApp
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
