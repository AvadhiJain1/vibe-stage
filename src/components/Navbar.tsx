import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Lineup", href: "#lineup" },
  { label: "Schedule", href: "#schedule" },
  { label: "Experience", href: "#experience" },
  { label: "Tickets", href: "#tickets" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-heading text-2xl font-black tracking-tight gradient-text">
          NOVA<span className="text-primary">FEST</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#tickets"
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_25px_hsl(186_100%_50%/0.5)] transition-all duration-300"
          >
            Get Tickets
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground font-medium text-lg uppercase tracking-wider"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#tickets"
                onClick={() => setMobileOpen(false)}
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-heading font-bold text-center uppercase tracking-wider mt-2"
              >
                Get Tickets
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
