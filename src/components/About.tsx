import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Code, Eye, Target } from 'lucide-react';

const About: React.FC = () => {
  const principles = [
    {
      icon: <Zap className="text-violet-400" />,
      title: 'Creativity',
      subtitle: 'Sparks of Chaos',
      description: 'We transform chaotic inspiration into breathtaking design that defies conventional boundaries.',
      gradient: 'from-violet-500 to-purple-600',
      glow: 'shadow-violet-500/30'
    },
    {
      icon: <Code className="text-cyan-400" />,
      title: 'Technology',
      subtitle: 'Precision in Motion',
      description: 'Every line of code is crafted with surgical precision, creating seamless digital experiences.',
      gradient: 'from-cyan-500 to-blue-600',
      glow: 'shadow-cyan-500/30'
    },
    {
      icon: <Eye className="text-pink-400" />,
      title: 'Simplicity',
      subtitle: 'The Beauty of Clarity',
      description: 'In a noisy digital world, we find power in elegant simplicity and intuitive design.',
      gradient: 'from-pink-500 to-rose-600',
      glow: 'shadow-pink-500/30'
    },
    {
      icon: <Target className="text-emerald-400" />,
      title: 'Impact',
      subtitle: 'Designs That Echo Beyond the Screen',
      description: 'We create work that resonates long after the screen fades, leaving lasting impressions.',
      gradient: 'from-emerald-500 to-teal-600',
      glow: 'shadow-emerald-500/30'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
              filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))"
            }}
          >
            Who We Really Are
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p 
              className="text-xl md:text-3xl text-gray-300 leading-relaxed font-space-grotesk"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Metazest is not a studio. It's a{' '}
              <motion.span 
                className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent font-bold"
                whileHover={{ scale: 1.05 }}
              >
                realm
              </motion.span>
              .
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-400 leading-relaxed font-space-grotesk"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              A place where technology and art collide, where websites breathe and apps evolve.
              We are explorers of the digital unknown, crafting experiences that transcend reality.
            </motion.p>
          </div>
        </motion.div>

        <div className="mb-16">
          <motion.h3 
            className="text-2xl md:text-4xl font-bold text-center mb-16 text-violet-300 font-orbitron"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Core Principles
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {principles.map((principle, index) => (
              <motion.div 
                key={principle.title}
                variants={cardVariants}
                className="group relative"
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02
                }}
                style={{ perspective: '1000px' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl ${principle.glow}`} />
                
                <div className="relative bg-slate-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-500 h-full">
                  {/* Icon Container */}
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${principle.gradient} rounded-2xl flex items-center justify-center mb-6 ${principle.glow} shadow-lg`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {principle.icon}
                  </motion.div>
                  
                  <motion.h4 
                    className="text-xl font-bold mb-2 text-white font-orbitron"
                    whileHover={{ color: '#a855f7' }}
                  >
                    {principle.title}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-sm font-medium text-violet-300 mb-4 font-space-grotesk"
                    whileHover={{ scale: 1.05 }}
                  >
                    {principle.subtitle}
                  </motion.p>
                  
                  <p className="text-gray-400 leading-relaxed font-space-grotesk">
                    {principle.description}
                  </p>

                  {/* Particle Effect on Hover */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${principle.gradient} rounded-full opacity-0 group-hover:opacity-100`}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`,
                        }}
                        animate={{
                          y: [-10, -30, -10],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Reality Distortion Quote */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.blockquote 
            className="text-2xl md:text-3xl font-light text-gray-300 italic max-w-4xl mx-auto font-space-grotesk"
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
            }}
          >
            "In the space between pixels and dreams, we build tomorrow's digital reality."
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default About;