import { ArrowRight, Dribbble, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
            I'm always interested in discussing new opportunities, design challenges, 
            or just having a conversation about design strategy and user research.
          </p>
          <a href="mailto:hello@example.com">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-700 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Rifda. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Dribbble size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
