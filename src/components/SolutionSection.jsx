import { motion } from 'framer-motion';
import { Shield, Home, Handshake } from 'lucide-react';

const SolutionSection = () => {
  const benefits = [
    {
      icon: Handshake,
      title: "Asesoramiento profesional",
      description: "Te guiamos desde el primer contacto con experiencia y conocimiento local."
    },
    {
      icon: Home,
      title: "Gestión completa",
      description: "Nos ocupamos de todo el proceso para que no tengas que preocuparte por nada."
    },
    {
      icon: Shield,
      title: "Tranquilidad garantizada",
      description: "Acompañamiento constante en cada etapa hasta concretar la operación."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <>
      {/* Solution Introduction */}
      <section className="py-24 px-6 bg-bg-light">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Una gestión inmobiliaria{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-teal-500">
                clara y profesional
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nos ocupamos de todo el proceso para que puedas vender, comprar o alquilar sin estrés ni incertidumbre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ¿Qué obtenés trabajando con nosotros?
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: '0 28px 80px rgba(2,6,23,0.22)'
                }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-soft border-t-4 border-gradient-to-r from-accent to-teal-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-teal-500" />
                
                <div className="w-14 h-14 rounded-2xl icon-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon size={28} />
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SolutionSection;
