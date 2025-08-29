import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Palette, Gamepad2, ArrowRight, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Design',
      subtitle: 'Surreal Layouts That Adapt Like Liquid',
      description: 'Responsive, fluid, and surreal. We design websites that adapt like living organisms, transforming visitors into explorers of digital dimensions.',
      features: ['Responsive Design', 'Interactive Animations', 'Performance Optimization', 'SEO Excellence'],
      gradient: 'from-violet-500 to-purple-600',
      glowColor: 'violet'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'App Development',
      subtitle: 'Apps as Living Ecosystems',
      description: 'Applications engineered as digital ecosystems — intuitive, adaptive, and built to grow with your vision and evolve with your users.',
      features: ['Native Performance', 'Cross-Platform', 'Real-time Features', 'Scalable Architecture'],
      gradient: 'from-cyan-500 to-blue-600',
      glowColor: 'cyan'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Brand Identity',
      subtitle: 'Identities That Mutate & Evolve',
      description: 'Beyond logos. We create evolving visual universes — digital souls that reflect and amplify your story across all touchpoints.',
      features: ['Visual Identity', 'Brand Guidelines', 'Digital Assets', 'Brand Evolution'],
      gradient: 'from-pink-500 to-rose-600',
      glowColor: 'pink'
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Immersive Experiences',
      subtitle: 'WebGL, AR/VR, and Interactive Worlds',
      description: 'WebGL, AR, and VR experiences that dissolve the line between screen and reality. We design worlds, not just interfaces.',
      features: ['3D Experiences', 'AR/VR Integration', 'Interactive Storytelling', 'Real-time Rendering'],
      gradient: 'from-emerald-500 to-teal-600',
      glowColor: 'emerald'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-orbitron"
            whileHover={{ 
              scale: 1.02,
              filter: "drop-shadow(0 0 30px rgba(139, 92, 246, 0.6))"
            }}
          >
            What We Create
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto font-space-grotesk"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Each creation is a portal to new possibilities, designed to transcend the ordinary.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="group relative perspective-1000"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-xl`}
                animate={hoveredService === index ? { scale: 1.1 } : { scale: 1 }}
              />
              
              <motion.div 
                className="relative bg-slate-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-violet-500/30 transition-all duration-500 cursor-pointer h-full"
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  boxShadow: `0 25px 50px rgba(139, 92, 246, 0.2)`
                }}
                animate={selectedService === index ? { 
                  scale: 1.02,
                  borderColor: 'rgba(139, 92, 246, 0.5)'
                } : {}}
              >
                {/* Icon */}
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg ${service.glow}`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-violet-300 transition-colors duration-300 font-orbitron"
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-sm font-medium text-violet-300 mb-4 font-space-grotesk"
                  whileHover={{ scale: 1.02 }}
                >
                  {service.subtitle}
                </motion.p>
                
                <motion.p 
                  className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6 font-space-grotesk"
                  animate={hoveredService === index ? { y: -2 } : { y: 0 }}
                >
                  {service.description}
                </motion.p>

                {/* Features List */}
                <AnimatePresence>
                  {selectedService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-700/50 pt-6 mt-6"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <Sparkles size={12} className="text-violet-400" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover Indicator */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                >
                  <ArrowRight size={20} className="text-violet-400" />
                </motion.div>

                {/* Particle Effects */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  {hoveredService === index && [...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-20, -60, -20],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-4 mx-auto font-space-grotesk relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">Explore Our Capabilities</span>
            <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;