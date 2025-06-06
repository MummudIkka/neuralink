import { motion } from "framer-motion";

export default function FloatingElements() {
  const elements = [
    { size: 60, x: "10%", y: "20%", delay: 0, duration: 8 },
    { size: 40, x: "85%", y: "15%", delay: 2, duration: 10 },
    { size: 80, x: "90%", y: "70%", delay: 4, duration: 12 },
    { size: 30, x: "15%", y: "80%", delay: 1, duration: 9 },
    { size: 50, x: "70%", y: "60%", delay: 3, duration: 11 },
    { size: 35, x: "5%", y: "50%", delay: 5, duration: 7 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: element.x,
            top: element.y,
            width: element.size,
            height: element.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            y: [0, -100, 0],
            rotateZ: [0, 180, 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full backdrop-blur-sm border border-white/10" />
        </motion.div>
      ))}

      {/* Larger accent spheres */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-20 sm:w-32 h-20 sm:h-32"
        animate={{
          y: [0, -50, 0],
          rotateY: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full backdrop-blur-lg border border-blue-400/20 shadow-lg shadow-blue-500/10" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/5 w-16 sm:w-24 h-16 sm:h-24"
        animate={{
          y: [0, 30, 0],
          rotateX: [0, 180, 360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full backdrop-blur-lg border border-cyan-400/20 shadow-lg shadow-cyan-500/10" />
      </motion.div>
    </div>
  );
}
