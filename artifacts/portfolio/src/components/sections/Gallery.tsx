import { motion } from "framer-motion";

const galleryItems = [
  {
    title: "Dashboard Components",
    tag: "Web UI",
    image: "gallery-1.png",
  },
  {
    title: "Mobile App Screens",
    tag: "Mobile UI",
    image: "gallery-2.png",
  },
  {
    title: "Data Visualization",
    tag: "Data Kit",
    image: "gallery-3.png",
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold mb-4"
          >
            UI Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            A collection of interface explorations, design systems, and visual experiments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all border border-border"
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/${item.image}`} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-semibold px-2 py-1 bg-white/20 backdrop-blur-md text-white rounded mb-3 inline-block">
                  {item.tag}
                </span>
                <h3 className="text-white text-lg font-bold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
