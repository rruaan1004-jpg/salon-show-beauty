import { motion } from "framer-motion";
import { Scissors, Hand, Footprints } from "lucide-react";
import serviceHair from "@/assets/service-hair.jpg";
import serviceManicure from "@/assets/service-manicure.jpg";
import servicePedicure from "@/assets/service-pedicure.jpg";

const services = [
  {
    icon: Scissors,
    title: "Cabelo",
    image: serviceHair,
    description: "Cortes modernos, coloração, hidratação profunda e tratamentos capilares personalizados.",
    items: [
      { name: "Corte Feminino", price: "R$ 80" },
      { name: "Escova Modelada", price: "R$ 60" },
      { name: "Coloração Completa", price: "R$ 150" },
      { name: "Mechas / Luzes", price: "R$ 200" },
      { name: "Hidratação Profunda", price: "R$ 90" },
      { name: "Progressiva", price: "R$ 250" },
    ],
  },
  {
    icon: Hand,
    title: "Manicure",
    image: serviceManicure,
    description: "Unhas impecáveis com esmaltação tradicional, em gel e nail art exclusiva.",
    items: [
      { name: "Manicure Simples", price: "R$ 35" },
      { name: "Manicure com Gel", price: "R$ 60" },
      { name: "Unhas em Fibra", price: "R$ 120" },
      { name: "Nail Art", price: "R$ 25+" },
      { name: "Esmaltação em Gel", price: "R$ 50" },
      { name: "Spa das Mãos", price: "R$ 80" },
    ],
  },
  {
    icon: Footprints,
    title: "Pedicure",
    image: servicePedicure,
    description: "Cuidado completo para seus pés com tratamentos relaxantes e esfoliação.",
    items: [
      { name: "Pedicure Simples", price: "R$ 40" },
      { name: "Pedicure com Gel", price: "R$ 65" },
      { name: "Spa dos Pés", price: "R$ 100" },
      { name: "Esfoliação Completa", price: "R$ 50" },
      { name: "Hidratação dos Pés", price: "R$ 45" },
      { name: "Francesinha", price: "R$ 50" },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-salon-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-primary">
            O que oferecemos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Nossos Serviços
          </h2>
          <div className="w-20 h-1 bg-salon-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden shadow-salon hover:shadow-lg transition-shadow duration-500 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <service.icon className="text-primary-foreground" size={22} />
                  <h3 className="font-display text-2xl font-bold text-primary-foreground">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between font-body text-sm"
                    >
                      <span className="text-foreground">{item.name}</span>
                      <span className="text-primary font-bold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
