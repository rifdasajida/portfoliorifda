import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/portfolio";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
            {contact.heading}
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
            {contact.subtext}
          </p>
          <a href={`mailto:${contact.email}`}>
            <Button
              size="lg"
              className="bg-white text-black border-white hover:bg-gray-100 transition-all duration-300"
            >
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>

        <div className="pt-8 border-t border-gray-800 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {contact.copyright}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
