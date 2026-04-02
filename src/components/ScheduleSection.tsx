import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

const schedule = [
  { time: "4:00 PM", artist: "Gates Open", stage: "All Stages", type: "event" },
  { time: "5:00 PM", artist: "ZERO GRAVITY", stage: "Nebula Stage", type: "set" },
  { time: "6:00 PM", artist: "NEON DISTRICT", stage: "Pulse Arena", type: "set" },
  { time: "7:00 PM", artist: "VELVET PULSE", stage: "Nebula Stage", type: "set" },
  { time: "8:00 PM", artist: "CIPHER", stage: "Pulse Arena", type: "set" },
  { time: "9:30 PM", artist: "MIDNIGHT ECHO", stage: "Main Stage", type: "headliner" },
  { time: "11:00 PM", artist: "AURORA WAVES", stage: "Main Stage", type: "headliner" },
  { time: "1:00 AM", artist: "After Party", stage: "Underground", type: "event" },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-3">Day 1 Preview</p>
          <h2 className="font-heading text-5xl md:text-7xl font-black gradient-text">SCHEDULE</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {schedule.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-4 md:gap-8 group"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full shrink-0 ${
                    item.type === "headliner"
                      ? "bg-secondary shadow-[0_0_10px_hsl(320_100%_60%/0.6)]"
                      : item.type === "event"
                      ? "bg-neon-yellow"
                      : "bg-primary/60"
                  }`}
                />
                {i < schedule.length - 1 && <div className="w-px flex-1 bg-border min-h-[60px]" />}
              </div>

              {/* Content */}
              <div className={`pb-8 flex-1 ${item.type === "headliner" ? "mb-2" : ""}`}>
                <div
                  className={`p-4 md:p-5 rounded-xl transition-all duration-300 ${
                    item.type === "headliner"
                      ? "glass neon-border-magenta"
                      : "hover:bg-muted/30"
                  }`}
                >
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                    <Clock size={14} />
                    <span className="font-mono">{item.time}</span>
                  </div>
                  <h3
                    className={`font-heading font-bold ${
                      item.type === "headliner"
                        ? "text-xl md:text-2xl text-secondary text-glow-magenta"
                        : item.type === "event"
                        ? "text-lg text-neon-yellow"
                        : "text-lg text-foreground"
                    }`}
                  >
                    {item.artist}
                  </h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs mt-1">
                    <MapPin size={12} />
                    {item.stage}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
