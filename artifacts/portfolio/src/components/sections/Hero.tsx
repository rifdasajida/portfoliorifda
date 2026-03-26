import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative flex items-center pt-28 pb-16 overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-6">
              👋 Welcome to my portfolio
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Hi! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gray-500">Rifda.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg"
            >
              A Product Designer dedicated to solving problems with data-informed strategy and purposeful design. Building experiences that matter.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <a href="#work">
                <Button size="lg" className="w-full sm:w-auto">
                  View My Work
                </Button>
              </a>
              <a href="#about">
                <Button size="lg" variant="ghost" className="w-full sm:w-auto group">
                  Get to Know Me 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[500px] rounded-2xl overflow-hidden bg-secondary/30">
              <img 
                src={`${import.meta.env.BASE_URL}images/hero-illustration.png`} 
                alt="Product Designer Illustration" 
                className="object-contain w-full h-auto drop-shadow-xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
