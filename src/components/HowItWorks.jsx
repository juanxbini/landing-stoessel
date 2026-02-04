import { motion } from 'framer-motion';
import { Smartphone, Search, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Nos escribís por WhatsApp",
      description: "Iniciá la conversación y contanos qué necesitás."
    },
    {
      icon: Search,
      title: "Analizamos tu necesidad",
      description: "Evaluamos tu propiedad y los objetivos que querés alcanzar."
    },
    {
      icon: CheckCircle,
      title: "Te acompañamos hasta el final",
      description: "Gestionamos todo el proceso hasta concretar la operación."
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

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="py-24 px-6 bg-bg-light">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-text-muted text-lg">
            Un proceso simple en 3 pasos
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: '0 28px 80px rgba(2,6,23,0.22)'
              }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-soft border-t-4 border-gradient-to-r from-accent to-teal-500 relative overflow-hidden group"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-accent to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {index + 1}
              </div>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-teal-500" />
              
              <div className="w-14 h-14 rounded-2xl icon-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon size={28} />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
