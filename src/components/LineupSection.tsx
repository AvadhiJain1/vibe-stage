import { motion } from "framer-motion";
import { useState } from "react";

const days = ["Day 1 — Aug 15", "Day 2 — Aug 16", "Day 3 — Aug 17"];

const lineup: Record<string, { name: string; tag: string; headliner?: boolean }[]> = {
  "Day 1 — Aug 15": [
    { name: "AURORA WAVES", tag: "Electronic", headliner: true },
    { name: "MIDNIGHT ECHO", tag: "Techno", headliner: true },
    { name: "CIPHER", tag: "House" },
    { name: "VELVET PULSE", tag: "Synthwave" },
    { name: "NEON DISTRICT", tag: "Bass" },
    { name: "ZERO GRAVITY", tag: "Ambient" },
  ],
  "Day 2 — Aug 16": [
    { name: "PHANTOM DRIVE", tag: "Drum & Bass", headliner: true },
    { name: "SOLAR FLARE", tag: "Progressive", headliner: true },
    { name: "GLITCH MOB", tag: "Electro" },
    { name: "DARK MATTER", tag: "Industrial" },
    { name: "PULSE WIDTH", tag: "Minimal" },
    { name: "SKYLINE", tag: "Trance" },
  ],
  "Day 3 — Aug 17": [
    { name: "NOVA SYNDICATE", tag: "Future Bass", headliner: true },
    { name: "DEEP CURRENT", tag: "Deep House", headliner: true },
    { name: "AFTERGLOW", tag: "Melodic" },
    { name: "STATIC BLOOM", tag: "Breakbeat" },
    { name: "ECHO CHAMBER", tag: "Downtempo" },
    { name: "PRISM", tag: "Experimental" },
  ],
};

const LineupSection = () => {
  const [activeDay, setActiveDay] = useState(days[0]);

  return (
    <section id="lineup" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 rounded-full bg-neon-purple/5 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">The Artists</p>
          <h2 className="font-heading text-5xl md:text-7xl font-black gradient-text">LINEUP</h2>
        </motion.div>

        {/* Day tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-full font-heading text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeDay === day
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(186_100%_50%/0.4)]"
                  : "neon-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Artists */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {/* Headliners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {lineup[activeDay]
              .filter((a) => a.headliner)
              .map((artist) => (
                <div
                  key={artist.name}
                  className="group relative p-8 rounded-2xl neon-border-magenta hover:shadow-[0_0_30px_hsl(320_100%_60%/0.3)] transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-magenta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <span className="text-xs uppercase tracking-widest text-secondary font-bold">★ Headliner</span>
                    <h3 className="font-heading text-3xl md:text-4xl font-black text-foreground mt-2">
                      {artist.name}
                    </h3>
                    <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs bg-secondary/20 text-secondary font-medium">
                      {artist.tag}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {/* Supporting */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {lineup[activeDay]
              .filter((a) => !a.headliner)
              .map((artist) => (
                <div
                  key={artist.name}
                  className="p-5 rounded-xl glass hover:neon-border transition-all duration-300 cursor-pointer group"
                >
                  <h4 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {artist.name}
                  </h4>
                  <span className="text-xs text-muted-foreground">{artist.tag}</span>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LineupSection;
