import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/75 backdrop-blur-md border-b border-gray-900/8"
    >
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <div className="font-extrabold tracking-tight text-primary text-lg">
          Stoessel Inmobiliaria
        </div>
        <a 
          href="https://wa.me/+5492914124237" 
          className="btn-secondary flex items-center gap-2"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
