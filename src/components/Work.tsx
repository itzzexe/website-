import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, X, Play } from 'lucide-react';

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Revolution',
      subtitle: 'Futuristic Shopping Arcade',
      description: 'A futuristic shopping experience where navigation feels like entering an arcade of endless possibilities. Every product interaction creates ripples in the digital fabric.',
      longDescription: 'This revolutionary e-commerce platform transforms online shopping into an immersive journey. Users navigate through floating product islands, each with its own gravitational pull and interactive physics. The checkout process feels like assembling a spacecraft, with each item adding to the ship\'s capabilities.',
      image: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['E-Commerce', 'WebGL', 'Interactive', '3D Design'],
      gradient: 'from-violet-600 to-purple-700',
      tech: ['React', 'Three.js', 'WebGL', 'Stripe'],
      metrics: ['300% Engagement Increase', '150% Conversion Rate', '95% User Satisfaction']
    },
    {
      title: 'Smart Banking App',
      subtitle: 'Humanized Finance Platform',
      description: 'A humanized finance platform, powered by sleek micro-interactions and intuitive flow that makes complex financial data feel like a beautiful symphony.',
      longDescription: 'This banking application reimagines financial interfaces as living, breathing ecosystems. Account balances flow like liquid mercury, transactions appear as shooting stars across the interface, and financial goals grow like digital trees that users can nurture.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['FinTech', 'Mobile', 'UX/UI', 'Security'],
      gradient: 'from-cyan-600 to-blue-700',
      tech: ['React Native', 'Node.js', 'PostgreSQL', 'Plaid API'],
      metrics: ['40% Faster Transactions', '200% User Retention', '99.9% Uptime']
    },
    {
      title: 'Lifestyle Platform',
      subtitle: 'Living Community Ecosystem',
      description: 'A living ecosystem for community and culture, designed to connect users on a deeper level through shared experiences and digital empathy.',
      longDescription: 'This social platform creates genuine connections through innovative interaction patterns. Users\' emotions influence the interface colors, shared interests form constellation patterns, and conversations bloom like digital flowers that grow stronger with engagement.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Social', 'Community', 'Platform', 'AI'],
      gradient: 'from-pink-600 to-rose-700',
      tech: ['Next.js', 'GraphQL', 'MongoDB', 'Socket.io'],
      metrics: ['500K Active Users', '85% Daily Engagement', '4.9★ App Rating']
    },
    {
      title: 'Neural Art Gallery',
      subtitle: 'AI-Powered Creative Space',
      description: 'An immersive digital gallery where AI and human creativity merge, creating art that evolves based on viewer emotions and interactions.',
      longDescription: 'This groundbreaking platform uses emotion recognition and AI to create personalized art experiences. Artworks morph and evolve based on viewer reactions, creating unique pieces that exist only in the moment of observation.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['AI Art', 'Machine Learning', 'Interactive', 'Gallery'],
      gradient: 'from-emerald-600 to-teal-700',
      tech: ['Python', 'TensorFlow', 'WebGL', 'Computer Vision'],
      metrics: ['1M+ Art Pieces Generated', '90% Emotional Accuracy', 'Featured in MoMA']
    }
  ];

  return (
    <section id="work" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
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
              filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.6))"
            }}
          >
            Worlds We've Built
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 max-w-4xl mx-auto font-space-grotesk"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Each project is more than a website — it's a parallel reality, designed to immerse and captivate.
          </motion.p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(index)}
              style={{ perspective: '1000px' }}
            >
              {/* Floating Island Effect */}
              <motion.div
                className="relative bg-slate-900/40 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden hover:border-violet-500/30 transition-all duration-500"
                whileHover={{ 
                  y: -15,
                  rotateX: 5,
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)"
                }}
                animate={hoveredProject === index ? {
                  boxShadow: `0 30px 60px rgba(139, 92, 246, 0.2)`
                } : {}}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-64">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 transition-opacity duration-500`}
                    animate={hoveredProject === index ? { opacity: 0.4 } : { opacity: 0.2 }}
                  />
                  <motion.img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={hoveredProject === index ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"
                    animate={hoveredProject === index ? { opacity: 0.9 } : { opacity: 0.6 }}
                  />
                  
                  {/* Play Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={hoveredProject === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </motion.div>
                </div>
                
                {/* Project Info */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <motion.span 
                        key={tag}
                        className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm border border-violet-500/30 font-space-grotesk"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.3)' }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-violet-300 transition-colors duration-300 font-orbitron"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm font-medium text-violet-300 mb-4 font-space-grotesk"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.subtitle}
                  </motion.p>
                  
                  <motion.p 
                    className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 font-space-grotesk"
                    animate={hoveredProject === index ? { y: -2 } : { y: 0 }}
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {hoveredProject === index && [...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                      }}
                      animate={{
                        y: [-10, -40, -10],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900/90 backdrop-blur-xl border border-violet-500/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-10 w-10 h-10 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700/80 transition-all duration-300"
                  >
                    <X size={20} />
                  </button>

                  {/* Project Details */}
                  <div className="p-8">
                    <div className="mb-8">
                      <img 
                        src={projects[selectedProject].image}
                        alt={projects[selectedProject].title}
                        className="w-full h-64 object-cover rounded-2xl mb-6"
                      />
                      
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white font-orbitron">
                        {projects[selectedProject].title}
                      </h3>
                      
                      <p className="text-lg text-violet-300 mb-6 font-space-grotesk font-medium">
                        {projects[selectedProject].subtitle}
                      </p>
                      
                      <p className="text-gray-300 leading-relaxed mb-8 font-space-grotesk">
                        {projects[selectedProject].longDescription}
                      </p>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold mb-4 text-white font-orbitron">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {projects[selectedProject].tech.map((tech) => (
                            <span 
                              key={tech}
                              className="px-4 py-2 bg-slate-800/50 text-cyan-300 rounded-lg text-sm border border-cyan-500/30 font-space-grotesk"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold mb-4 text-white font-orbitron">Impact Metrics</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {projects[selectedProject].metrics.map((metric, index) => (
                            <div 
                              key={metric}
                              className="bg-slate-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center"
                            >
                              <p className="text-2xl font-bold text-violet-300 mb-1 font-orbitron">
                                {metric.split(' ')[0]}
                              </p>
                              <p className="text-sm text-gray-400 font-space-grotesk">
                                {metric.split(' ').slice(1).join(' ')}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex gap-4">
                        <button className="flex-1 bg-gradient-to-r from-violet-600 to-cyan-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-space-grotesk">
                          View Live Site
                          <ExternalLink size={18} />
                        </button>
                        <button className="px-6 py-3 border border-gray-600 hover:border-violet-500 rounded-xl transition-all duration-300 hover:bg-violet-500/10 font-space-grotesk">
                          Case Study
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="group bg-slate-900/50 border-2 border-gray-700 px-10 py-5 rounded-full hover:border-violet-500 transition-all duration-300 hover:bg-violet-500/10 flex items-center gap-4 mx-auto font-space-grotesk font-semibold text-lg relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">Explore All Dimensions</span>
            <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;