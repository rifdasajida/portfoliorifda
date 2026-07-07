import { motion } from "framer-motion";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">About Me</h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            {about.bio.map((paragraph, i) => (
              <p key={i} className="text-[#4a4646]">{paragraph}</p>
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
      </div>
    </section>
  );
}
