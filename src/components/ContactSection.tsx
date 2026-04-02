import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Stay Connected</p>
          <h2 className="font-heading text-5xl md:text-7xl font-black gradient-text">CONTACT</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Have questions about NOVAFEST? Need help with tickets, partnerships, or press inquiries?
                We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="text-primary" size={20} />
                <span>hello@novafest.live</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="text-primary" size={20} />
                <span>LA State Historic Park, Los Angeles, CA</span>
              </div>
            </div>

            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full neon-border flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-[0_0_15px_hsl(186_100%_50%/0.3)] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass neon-border rounded-2xl p-8"
          >
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Join the Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Be the first to know about lineup announcements, exclusive presales, and festival updates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-5 py-3.5 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(186_100%_50%/0.15)] transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider hover:shadow-[0_0_25px_hsl(186_100%_50%/0.5)] transition-all duration-300"
              >
                {submitted ? "✓ Subscribed!" : "Subscribe"}
              </button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
