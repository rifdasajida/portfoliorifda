import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/portfolio";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((c) => c.slug === slug);

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const prev = caseStudies[currentIndex - 1] ?? null;
  const next = caseStudies[currentIndex + 1] ?? null;

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-extrabold">Case study not found</h1>
        <Link href="/" className="text-primary font-semibold underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero banner */}
      <section className={`pt-28 pb-16 ${study.color}`}>
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>

            <div className="flex flex-wrap gap-2 mb-6">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold bg-white/70 rounded-full border border-border/40 text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              {study.title}
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl">
              {study.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cover image */}
      <div className="container mx-auto px-6 max-w-4xl -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-border"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/${study.image}`}
            alt={study.title}
            className="w-full object-cover"
          />
        </motion.div>
      </div>

      {/* Body */}
      <article className="container mx-auto px-6 max-w-4xl py-20 space-y-20">

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-extrabold mb-4">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {study.overview}
          </p>
        </motion.section>

        {/* Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl bg-secondary/40 border border-border"
        >
          <h2 className="text-2xl font-extrabold mb-4">The Problem</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {study.problem}
          </p>
        </motion.section>

        {/* Process */}
        {study.processSteps && study.processSteps.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-extrabold mb-10">Process</h2>
            <div className="space-y-8">
              {study.processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Gallery */}
        {study.gallery && study.gallery.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-extrabold mb-8">Visuals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.gallery.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-border shadow-sm"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/${img}`}
                    alt={`${study.title} visual ${i + 1}`}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Outcome */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl bg-primary text-primary-foreground"
        >
          <h2 className="text-2xl font-extrabold mb-4">Outcome & Impact</h2>
          <p className="text-lg leading-relaxed opacity-90">{study.outcome}</p>
        </motion.section>

      </article>

      {/* Prev / Next navigation */}
      <div className="container mx-auto px-6 max-w-4xl pb-20">
        <div className="flex justify-between items-center border-t border-border pt-12 gap-4">
          {prev ? (
            <Link
              href={`/case-study/${prev.slug}`}
              className="group flex flex-col gap-1 max-w-xs"
            >
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <ArrowLeft className="w-3 h-3" /> Previous
              </span>
              <span className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/case-study/${next.slug}`}
              className="group flex flex-col items-end gap-1 max-w-xs text-right"
            >
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                Next <ArrowRight className="w-3 h-3" />
              </span>
              <span className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
