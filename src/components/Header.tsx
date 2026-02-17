import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
{ label: "Início", href: "#inicio" },
{ label: "Serviços", href: "#servicos" },
{ label: "Sobre", href: "#sobre" },
{ label: "Contato", href: "#contato" }];


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#inicio" className="font-display text-2xl font-bold text-primary tracking-wide">
          Salon <span className="text-gradient-gold">Show</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="font-body text-sm tracking-wider uppercase text-foreground/70 hover:text-primary transition-colors duration-300">

              {link.label}
            </a>
          )}
          <a

            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-body font-bold tracking-wide hover:opacity-90 transition-opacity" href="tel:+351965752907">

            <Phone size={14} />
            Agendar
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}>

          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-card border-b border-border overflow-hidden">

            <nav className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-body text-sm tracking-wider uppercase text-foreground/70 hover:text-primary transition-colors">

                  {link.label}
                </a>
            )}
              <a
              href="tel:+5511999999999"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold">

                <Phone size={14} />
                Agendar
              </a>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

};

export default Header;