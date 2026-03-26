import { motion } from "framer-motion";
import { Lightbulb, Target, Zap } from "lucide-react";

export function Philosophy() {
  const philosophies = [
    {
      icon: <Target className="w-6 h-6 mb-4 text-primary" />,
      title: "Design with Intention",
      description: "Every pixel serves a purpose. No decorative fluff, just meaningful choices."
    },
    {
      icon: <Lightbulb className="w-6 h-6 mb-4 text-primary" />,
      title: "Solving Problems",
      description: "Focusing on root user pain points rather than surface-level symptoms."
    },
    {
      icon: <Zap className="w-6 h-6 mb-4 text-primary" />,
      title: "Make Impacts",
      description: "Driving measurable business metrics through strategic design solutions."
    }
  ];

  return (
    <section className="bg-secondary/50 py-16 border-y border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-border/50">
          {philosophies.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0 px-6"
            >
              {item.icon}
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
