import React from 'react';
import { motion } from 'framer-motion';

const LoadingPortal: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center overflow-hidden"
    >
      {/* Portal Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-slate-950 to-cyan-950" />
      
      {/* Animated Portal Ring */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="relative"
      >
        <div className="w-64 h-64 border-4 border-transparent bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500 rounded-full p-1">
          <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg transform rotate-45 mx-auto mb-4"
              />
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent font-orbitron"
              >
                METAZEST
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Particle Effects */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
            opacity: 0
          }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 3
          }}
          className="absolute w-2 h-2 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full"
        />
      ))}

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-violet-300 text-lg font-space-grotesk">
          Initializing Reality Engine...
        </p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 2, duration: 1 }}
          className="h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-4"
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingPortal;