import { Mail, Linkedin, MessageCircle } from "lucide-react";
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

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:rifda.sajida@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              rifda.sajida@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/rifda-sajida"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              <Linkedin className="w-5 h-5 flex-shrink-0" />
              Rifda Sajida
            </a>
            <a
              href="https://wa.me/6285862153013"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              085862153013
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {contact.copyright}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
