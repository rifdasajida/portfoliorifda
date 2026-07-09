import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const BASE = import.meta.env.BASE_URL;

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const post = blogPosts.find((p) => p.slug === params?.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F4F6FB] font-sans">
        <Navbar />
        <div className="pt-32 pb-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const paragraphs = post.content.split("\n\n").filter((p) => p.trim());

  return (
    <div className="min-h-screen bg-[#F4F6FB] font-sans">
      <Navbar />

      <article className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Back link */}
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Reveal>

          {/* Post header */}
          <Reveal delay={0.05}>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0A1628] mb-8 leading-tight">
              {post.title}
            </h1>
          </Reveal>

          {/* Divider */}
          <Reveal delay={0.15}>
            <div className="w-16 h-1 bg-[#4B5FE0] rounded-full mb-10" />
          </Reveal>

          {/* Content */}
          <div className="max-w-none">
            {paragraphs.map((paragraph, index) => {
              // ## Section heading
              if (paragraph.startsWith("## ")) {
                const text = paragraph.slice(3).trim();
                return (
                  <Reveal key={index} delay={index * 0.02}>
                    <div className="mt-12 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-6 rounded-full bg-[#4B5FE0]" />
                        <h2 className="text-[19px] font-extrabold text-[#0A1628] tracking-[-0.01em]">{text}</h2>
                      </div>
                    </div>
                  </Reveal>
                );
              }

              // > Blockquote
              if (paragraph.startsWith("> ")) {
                const text = paragraph.slice(2).trim();
                return (
                  <Reveal key={index} delay={index * 0.02}>
                    <div className="my-8 rounded-xl px-6 py-5" style={{ background: "#EEF0FD", borderLeft: "4px solid #4B5FE0" }}>
                      <p className="text-[16px] italic font-medium text-[#0A1628] leading-[1.7] m-0">{text}</p>
                    </div>
                  </Reveal>
                );
              }

              // Regular paragraph
              return (
                <Reveal key={index} delay={index * 0.02}>
                  <p className="text-[15.5px] text-[#0A1628]/75 leading-[1.85] mb-5">
                    {paragraph}
                  </p>
                </Reveal>
              );
            })}
          </div>

          {/* Back to top / Back to home */}
          <Reveal delay={0.2}>
            <div className="mt-16 pt-8 border-t border-[#DDE3F3] flex items-center justify-between">
              <Link href="/">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      <Footer />
    </div>
  );
}
