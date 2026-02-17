import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-xl font-bold text-primary-foreground mb-2">
          Salon <span className="text-gradient-gold">Show</span>
        </p>
        <p className="font-body text-sm text-primary-foreground/50 flex items-center justify-center gap-1">
          Feito com <Heart size={12} className="text-primary" /> para mulheres que brilham
        </p>
        <p className="font-body text-xs text-primary-foreground/30 mt-4">
          © 2026 Salon Show. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
