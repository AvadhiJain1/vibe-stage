import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const tiers = [
  {
    name: "General",
    price: "$149",
    perks: ["3-day festival access", "All 4 stages", "Food & drink vendors", "Community camping"],
    accent: "primary",
    border: "neon-border",
    featured: false,
  },
  {
    name: "VIP",
    price: "$349",
    perks: [
      "All General perks",
      "VIP lounge & viewing decks",
      "Premium bars & food",
      "Artist meet-and-greet",
      "Exclusive merch pack",
    ],
    accent: "secondary",
    border: "neon-border-magenta",
    featured: true,
  },
  {
    name: "Platinum",
    price: "$699",
    perks: [
      "All VIP perks",
      "Front-stage access",
      "Private backstage tour",
      "Luxury glamping suite",
      "After-party access",
      "Personal concierge",
    ],
    accent: "accent",
    border: "neon-border",
    featured: false,
  },
];

const TicketsSection = () => {
  return (
    <section id="tickets" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-neon-magenta/5 blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-3">Secure Your Spot</p>
          <h2 className="font-heading text-5xl md:text-7xl font-black gradient-text">TICKETS</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Early bird pricing ends soon. Lock in the best rates before they're gone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl ${tier.border} ${
                tier.featured ? "scale-[1.02] md:scale-105" : ""
              } glass flex flex-col transition-all duration-500 hover:shadow-[0_0_40px_hsl(320_100%_60%/0.2)]`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> Most Popular
                </div>
              )}

              <h3 className="font-heading text-2xl font-bold text-foreground">{tier.name}</h3>
              <div className="mt-4 mb-6">
                <span className={`font-heading text-5xl font-black text-${tier.accent}`}>{tier.price}</span>
                <span className="text-muted-foreground text-sm ml-2">/ person</span>
              </div>

              <ul className="space-y-3 flex-1">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className={`text-${tier.accent} shrink-0 mt-0.5`} />
                    {perk}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-4 rounded-full font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                  tier.featured
                    ? "bg-secondary text-secondary-foreground hover:shadow-[0_0_25px_hsl(320_100%_60%/0.5)]"
                    : "neon-border text-foreground hover:bg-primary/10"
                }`}
              >
                Get {tier.name} Pass
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
