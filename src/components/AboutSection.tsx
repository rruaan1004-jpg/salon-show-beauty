import { motion } from "framer-motion";
import { Heart, Award, Clock } from "lucide-react";

const highlights = [
  { icon: Heart, title: "Amor pelo que fazemos", desc: "Cada cliente é especial e tratada com carinho e atenção." },
  { icon: Award, title: "Profissionais qualificadas", desc: "Equipe experiente e atualizada com as últimas tendências." },
  { icon: Clock, title: "Horários flexíveis", desc: "Atendemos de segunda a sábado com agendamento fácil." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-sm uppercase tracking-[0.3em] text-primary">
              Quem somos
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Sobre o Salon Show
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-16">
              Somos um salão dedicado à beleza feminina, oferecendo serviços de cabelo, manicure e pedicure
              em um ambiente acolhedor e sofisticado. Nossa missão é fazer você se sentir ainda mais bonita e confiante.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="p-8 rounded-2xl bg-salon-rose-light"
              >
                <item.icon className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
