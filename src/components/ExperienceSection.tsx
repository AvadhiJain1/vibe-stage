import { motion } from "framer-motion";
import { Sparkles, Music, Eye, Zap } from "lucide-react";

const features = [
  {
    icon: <Music className="w-8 h-8" />,
    title: "4 Stages",
    desc: "From the massive Main Stage to the intimate Underground, find your frequency.",
    color: "text-primary",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Immersive Art",
    desc: "Large-scale installations, projection mapping, and interactive light sculptures.",
    color: "text-secondary",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "VIP Lounge",
    desc: "Elevated viewing decks, private bars, and artist meet-and-greets.",
    color: "text-accent",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "After Hours",
    desc: "The night doesn't end. Secret sets and sunrise sessions await.",
    color: "text-neon-yellow",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-neon-cyan/5 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-3">Beyond Music</p>
          <h2 className="font-heading text-5xl md:text-7xl font-black gradient-text">THE EXPERIENCE</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl glass neon-border hover:shadow-[0_0_30px_hsl(186_100%_50%/0.15)] transition-all duration-500 text-center"
            >
              <div className={`${f.color} mb-5 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { num: "18+", label: "Artists" },
            { num: "4", label: "Stages" },
            { num: "3", label: "Nights" },
            { num: "50K+", label: "Attendees" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-black gradient-text">{s.num}</div>
              <div className="text-muted-foreground text-sm uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
