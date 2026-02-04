import { motion } from 'framer-motion';
import { MessageCircle, MapPin } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section 
      className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 text-white py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(2,6,23,0.85), rgba(2,6,23,0.85)), url("https://images.unsplash.com/photo-1505691938895-1758d7feb511")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20" />
      
      <motion.div 
        className="relative max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          Vendé, comprá o alquilá tu propiedad con{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-teal-400">
            confianza
          </span>
          {' '}en Bahía Blanca
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Te acompañamos en todo el proceso inmobiliario en Bahía Blanca, Pehuen Co y Monte Hermoso para que tomes decisiones seguras y concretas.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="https://wa.me/+5492914124237" 
            className="btn-primary text-lg px-8 py-4"
          >
            <MessageCircle size={20} />
            Hablar por WhatsApp
          </a>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm"
        >
          <MapPin size={14} />
          Más de 15 años de experiencia en el mercado inmobiliario local
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent rounded-t-[3rem]" />
    </section>
  );
};

export default Hero;
