import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-festival.jpg";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="NOVAFEST music festival aerial view"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-magenta/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-body text-sm md:text-base uppercase tracking-[0.3em] mb-4">
            August 15–17, 2026 • Los Angeles, CA
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-6xl sm:text-8xl md:text-9xl font-black leading-none mb-6 text-glow-cyan"
        >
          <span className="gradient-text">NOVA</span>
          <span className="text-foreground">FEST</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          Three nights of boundary-pushing music, immersive art, and electric energy.
          The future of festivals starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <CountdownTimer targetDate="2026-08-15T18:00:00" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <a
            href="#tickets"
            className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg uppercase tracking-wider hover:shadow-[0_0_30px_hsl(186_100%_50%/0.6)] transition-all duration-300 hover:scale-105"
          >
            Get Tickets
          </a>
          <a
            href="#lineup"
            className="px-10 py-4 rounded-full neon-border text-foreground font-heading font-bold text-lg uppercase tracking-wider hover:bg-primary/10 transition-all duration-300"
          >
            See Lineup
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-primary/60" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
