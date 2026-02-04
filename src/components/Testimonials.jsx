import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Juan G.",
      text: "Vendimos nuestra casa sin complicaciones y con acompañamiento constante.",
      rating: 5
    },
    {
      name: "Laura M.",
      text: "Nos sentimos seguros en todo el proceso de compra.",
      rating: 5
    },
    {
      name: "Carlos R.",
      text: "Alquilamos rápido y sin preocuparnos por los trámites.",
      rating: 5
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
            Experiencia local que genera{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-teal-500">
              confianza
            </span>
          </h2>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-soft text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-teal-500" />
            
            <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-accent overflow-hidden">
              <img 
                src="./perfil.png" 
                alt="Marisa Stoessel" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-2">
              Marisa Stoessel
            </h3>
            <p className="text-text-muted font-medium mb-4">
              Martillera Pública
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Más de 15 años acompañando operaciones inmobiliarias en Bahía Blanca, Pehuen Co y Monte Hermoso.
            </p>
            <div className="flex items-center justify-center gap-1 text-accent">
              <MapPin size={16} />
              <span className="text-sm text-text-muted">Zona Sur</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: '0 28px 80px rgba(2,6,23,0.22)'
              }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-soft border-t-4 border-gradient-to-r from-accent to-teal-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-teal-500" />
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <p className="font-semibold text-primary">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
