import { motion } from "framer-motion";
import { about } from "@/data/portfolio";

export function About() {
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
              {about.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {about.skills.map((skill) => (
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
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-secondary">
              <img
                src={`${import.meta.env.BASE_URL}images/${about.avatar}`}
                alt="Rifda - Product Designer"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 transform rotate-3" />

            {/* Availability badge */}
            <div
              className="absolute -bottom-6 -left-6 md:-left-12 bg-primary text-primary-foreground p-5 rounded-2xl shadow-xl z-20 max-w-[220px] animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 mt-1 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <p className="text-sm font-semibold leading-tight">
                  {about.availabilityBadge}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
