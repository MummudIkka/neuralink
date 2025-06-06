import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, Zap, Globe } from "lucide-react";

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Brain,
      title: "Neural Architecture",
      description: "Advanced neural networks that learn and adapt to your business needs in real-time."
    },
    {
      icon: Cpu,
      title: "Quantum Processing",
      description: "Leverage quantum-inspired algorithms for unprecedented computational power."
    },
    {
      icon: Zap,
      title: "Lightning Speed",
      description: "Process millions of data points in milliseconds with our optimized infrastructure."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy across continents with seamless integration and zero downtime."
    }
  ];

  return (
    <section id="solutions" className="relative py-20 sm:py-32 px-4 sm:px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Mission
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Redefining
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We pioneer breakthrough AI technologies that transform how organizations think, 
            learn, and evolve. Our mission is to unlock the full potential of artificial 
            intelligence for the world's most ambitious companies.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500"
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -10 }}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
            >
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.1, rotateZ: 5 }}
              >
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Central connecting element */}
        <motion.div
          className="flex justify-center mt-16 sm:mt-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full backdrop-blur-lg border border-blue-400/30 flex items-center justify-center">
            <motion.div
              className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
