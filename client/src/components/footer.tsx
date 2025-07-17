import { FaInstagram, FaSpotify, FaYoutube, FaApple } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="font-montserrat font-bold text-3xl text-white mb-8 tracking-wider">
            CABANA
          </div>
          <p className="font-inter text-silver mb-8 max-w-md mx-auto">
            Rising from Uganda with authentic sounds that bridge tradition and innovation
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <button
              onClick={() => scrollToSection("music")}
              className="text-silver hover:text-gold-accent transition-colors duration-300 font-inter"
            >
              Music
            </button>
            <button
              onClick={() => scrollToSection("shows")}
              className="text-silver hover:text-gold-accent transition-colors duration-300 font-inter"
            >
              Shows
            </button>
            <button
              onClick={() => scrollToSection("store")}
              className="text-silver hover:text-gold-accent transition-colors duration-300 font-inter"
            >
              Store
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-silver hover:text-gold-accent transition-colors duration-300 font-inter"
            >
              Contact
            </button>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="text-silver hover:text-gold-accent transition-colors duration-300"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-silver hover:text-gold-accent transition-colors duration-300"
            >
              <FaSpotify className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-silver hover:text-gold-accent transition-colors duration-300"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-silver hover:text-gold-accent transition-colors duration-300"
            >
              <FaApple className="w-6 h-6" />
            </a>
          </div>
          <p className="font-inter text-silver text-sm">
            © 2024 Cabana. All rights reserved. | Designed with love in Uganda
          </p>
        </div>
      </div>
    </footer>
  );
}
