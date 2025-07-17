import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HeroSection() {
  const scrollToMusic = () => {
    const element = document.getElementById("music");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&h=1560')",
        }}
      />
      <div className="absolute inset-0 hero-gradient" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white max-w-4xl px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair font-bold text-6xl md:text-8xl mb-6 tracking-wide"
        >
          CABANA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-montserrat text-xl md:text-2xl mb-8 font-light tracking-wider"
        >
          Rising Star from Uganda
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-inter text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Experience the soul-stirring melodies and powerful rhythms that define a new generation of African music
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button
            onClick={scrollToMusic}
            className="bg-gold-accent hover:bg-opacity-90 text-deep-black font-montserrat font-semibold px-8 py-4 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            LISTEN NOW
          </button>
          <button
            onClick={scrollToContact}
            className="border-2 border-white hover:bg-white hover:text-deep-black text-white font-montserrat font-semibold px-8 py-4 transition-all duration-300"
          >
            BOOK CABANA
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
