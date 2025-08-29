import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationId: number;
    let trailId = 0;

    const updateTrail = () => {
      setTrail(prevTrail => {
        const newTrail = [...prevTrail];
        
        // Add new point
        if (mousePosition.x !== 0 || mousePosition.y !== 0) {
          newTrail.push({
            x: mousePosition.x,
            y: mousePosition.y,
            id: trailId++
          });
        }

        // Remove old points
        if (newTrail.length > 15) {
          newTrail.shift();
        }

        return newTrail;
      });

      animationId = requestAnimationFrame(updateTrail);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    updateTrail();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-3 h-3 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full blur-sm"
          style={{
            left: point.x - 6,
            top: point.y - 6,
          }}
        />
      ))}
      
      {/* Main Cursor */}
      <motion.div
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="absolute w-4 h-4 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full shadow-lg shadow-violet-500/50"
      />
    </div>
  );
};

export default CursorTrail;