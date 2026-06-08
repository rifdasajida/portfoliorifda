import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { caseStudies } from "@/data/portfolio";

const INITIAL_COUNT = 3;

const cardClass =
  "flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300";

function CardInner({ study }: { study: (typeof caseStudies)[number] }) {
  return (
    <>
      <div
        className={`relative aspect-[16/9] overflow-hidden ${study.color} flex items-center justify-center`}
      >
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={`${import.meta.env.BASE_URL}images/${study.image}`}
          alt={study.title}
          className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md"
            >
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
    </>
  );
}

export function CaseStudies() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? caseStudies : caseStudies.slice(0, INITIAL_COUNT);
  const hasMore = caseStudies.length > INITIAL_COUNT;

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
            A collection of product journeys, from understanding the problem to
            shaping solutions that create value for users and the business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence initial={false}>
            {visible.map((study, index) => (
              <motion.div
                key={study.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay:
                    index < INITIAL_COUNT
                      ? index * 0.1
                      : (index - INITIAL_COUNT) * 0.1,
                }}
                className="group flex flex-col h-full"
              >
                {"externalUrl" in study && study.externalUrl ? (
                  <a
                    href={study.externalUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    <CardInner study={study} />
                  </a>
                ) : (
                  <Link
                    href={`/case-study/${study.slug}`}
                    className={cardClass}
                  >
                    <CardInner study={study} />
                  </Link>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-16 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show Less" : "See More Projects"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
