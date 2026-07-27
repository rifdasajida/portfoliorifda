import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/portfolio";

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-8 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold mb-4"
          >
            Latest Thoughts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >Personal reflections and thoughts related to design, research, and product.</motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.a
              href={post.href}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" /> {post.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-base text-muted-foreground mb-6 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>

              <div className="mt-auto flex items-center text-sm font-semibold text-primary">
                Read More
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
