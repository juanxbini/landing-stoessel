import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-bg-light">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            ¿Querés avanzar con tu propiedad?
          </h2>
          <p className="text-text-muted text-lg mb-8">
            Escribinos y te asesoramos sin compromiso
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a 
              href="https://wa.me/+5492914124237" 
              className="btn-primary text-lg px-8 py-4"
            >
              <MessageCircle size={20} />
              Hablar por WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 text-text-muted"
        >
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Bahía Blanca · Pehuen Co · Monte Hermoso</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>Atención personalizada</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <p className="text-sm text-gray-400">
            © 2024 Stoessel Inmobiliaria. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export { CTASection, Footer };
