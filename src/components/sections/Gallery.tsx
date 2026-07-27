import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { galleryItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <section id="gallery" className="py-24 bg-secondary/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header + controls row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold mb-3"
            >
              UI Gallery
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-[#4c5757]"
            >
              A collection of interface explorations, design systems, and visual
              experiments.
            </motion.p>
          </div>

          {/* Prev / Next buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={scrollPrev}
              className={cn(
                "w-11 h-11 rounded-full border border-border bg-background flex items-center justify-center transition-all duration-200",
                "hover:bg-primary hover:text-primary-foreground hover:border-primary",
                !canScrollPrev && "opacity-40 cursor-not-allowed"
              )}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className={cn(
                "w-11 h-11 rounded-full border border-border bg-background flex items-center justify-center transition-all duration-200",
                "hover:bg-primary hover:text-primary-foreground hover:border-primary",
                !canScrollNext && "opacity-40 cursor-not-allowed"
              )}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel viewport */}
        <div ref={emblaRef} className="overflow-hidden -mx-3">
          <div className="flex touch-pan-y">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="flex-none w-full sm:w-[95%] md:w-[80%] lg:w-[65%] xl:w-[57%] px-3"
              >
                <div className="group relative aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-sm bg-muted cursor-pointer">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    draggable={false}
                  />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Label */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full mb-3 inline-block">
                      {item.tag}
                    </span>
                    <h3 className="text-white text-xl font-bold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {galleryItems.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "rounded-full transition-all duration-300",
                i === selectedIndex
                  ? "w-7 h-2.5 bg-primary"
                  : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground"
              )}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
