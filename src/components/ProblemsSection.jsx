import { motion } from 'framer-motion';
import { DollarSign, Clock, FileText } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "No sabés a qué precio vender o alquilar",
      description: "Tu propiedad tiene un valor real, pero no sabés cómo determinarlo en el mercado actual."
    },
    {
      icon: Clock,
      title: "Desconfianza en el proceso",
      description: "Miedo a perder tiempo o dinero en una operación que no se concreta."
    },
    {
      icon: FileText,
      title: "No querés ocuparte de trámites",
      description: "Las visitas, negociaciones y paperwork te quitan tiempo que no tenés."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
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
            ¿Te pasa alguna de estas situaciones?
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Son las preocupaciones más comunes al operar una propiedad
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: '0 28px 80px rgba(2,6,23,0.22)'
              }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-soft border-t-4 border-gradient-to-r from-accent to-teal-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-teal-500" />
              
              <div className="w-14 h-14 rounded-2xl icon-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon size={28} />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsSection;
