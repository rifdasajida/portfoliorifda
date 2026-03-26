import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  {
    title: "Smart Murojaah Web App to Solve My Problem",
    description: "A comprehensive web application designed to help users track and maintain their memorization routines efficiently through gamification.",
    tags: ["Product Strategy", "UX Research", "Web App"],
    image: "case-study-1.png",
    color: "bg-blue-50"
  },
  {
    title: "E-commerce Checkout Optimization",
    description: "Redesigning the checkout flow to reduce cart abandonment rate by 24% for a mid-sized fashion retailer.",
    tags: ["Conversion", "A/B Testing", "Mobile UI"],
    image: "case-study-2.png",
    color: "bg-orange-50"
  },
  {
    title: "SaaS Analytics Dashboard Redesign",
    description: "Simplifying complex data visualization to help marketing managers make faster, more confident decisions.",
    tags: ["Data Viz", "Design System", "B2B SaaS"],
    image: "case-study-3.png",
    color: "bg-green-50"
  }
];

export function CaseStudies() {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold mb-4"
          >
            Study Cases
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Deep dives into product challenges and the strategic design solutions that drive measurable impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className={`relative aspect-[4/3] overflow-hidden ${study.color} flex items-center justify-center p-6`}>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={`${import.meta.env.BASE_URL}images/${study.image}`} 
                  alt={study.title}
                  className="w-full h-full object-cover rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {study.description}
                </p>
                
                <div className="flex items-center text-sm font-semibold text-primary mt-auto">
                  View Case Study
                  <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">
            See More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
