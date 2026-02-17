import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-salon-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-primary">
            Venha nos visitar
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Contato
          </h2>
          <div className="w-20 h-1 bg-salon-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-8">
          {[
            { icon: MapPin, label: "Endereço", value: "Rua das Flores, 123 — Centro" },
            { icon: Phone, label: "Telefone / WhatsApp", value: "(11) 99999-9999" },
            { icon: Clock, label: "Horário", value: "Seg a Sáb · 9h às 19h" },
            { icon: Instagram, label: "Instagram", value: "@salonshow" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 bg-card p-6 rounded-2xl shadow-salon"
            >
              <div className="p-3 rounded-full bg-salon-rose-light">
                <item.icon className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-foreground mb-1">{item.label}</h4>
                <p className="font-body text-muted-foreground text-sm">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity shadow-salon"
          >
            <Phone size={16} />
            Agendar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
