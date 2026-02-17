import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="text-salon-gold" size={20} />
            <span className="font-body text-sm uppercase tracking-[0.3em] text-primary-foreground/80">
              Beleza & Elegância
            </span>
            <Sparkles className="text-salon-gold" size={20} />
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Salon{" "}
            <span className="text-gradient-gold italic">Show</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto leading-relaxed font-light">
            Cabelo, manicure e pedicure com carinho e excelência. Descubra o melhor da beleza feminina.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#servicos"
              className="bg-salon-gold text-accent-foreground px-8 py-4 rounded-full font-body font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity shadow-gold"
            >
              Nossos Serviços
            </a>
            <a
              href="#contato"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-body font-bold text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
