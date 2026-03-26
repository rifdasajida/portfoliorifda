import { motion } from "framer-motion";

export function About() {
  const skills = [
    "Product Strategy", "UX Research", "Data Analysis", 
    "Design Systems", "Prototyping", "A/B Testing", 
    "Information Architecture", "Behavioral Design"
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">About Me</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
              <p>
                Hello! I'm Rifda, a Product Designer with over 5 years of experience crafting digital products that balance user needs with business goals. My background in psychology and data science gives me a unique perspective on human-computer interaction.
              </p>
              <p>
                I believe that great design isn't just about making things look pretty—it's about how it works, how it feels, and how it solves real problems. I thrive in agile environments where I can collaborate closely with engineering and product management teams.
              </p>
              <p>
                When I'm not pushing pixels, you can find me analyzing user behavioral patterns, building comprehensive design systems, or mentoring junior designers in the community.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-secondary">
              <img 
                src={`${import.meta.env.BASE_URL}images/avatar.png`} 
                alt="Rifda - Product Designer" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 transform rotate-3"></div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-primary text-primary-foreground p-5 rounded-2xl shadow-xl z-20 max-w-[220px] animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 mt-1 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <p className="text-sm font-semibold leading-tight">
                  Currently available for new opportunities
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
