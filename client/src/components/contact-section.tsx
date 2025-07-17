import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaSpotify, FaYoutube, FaApple, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-32 bg-deep-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair font-bold text-5xl md:text-6xl text-white mb-6">
            Get in Touch
          </h2>
          <p className="font-inter text-xl text-silver max-w-2xl mx-auto">
            For bookings, collaborations, and business inquiries
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair font-semibold text-3xl text-white mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <Mail className="text-gold-accent text-xl w-6" />
                <span className="font-inter text-silver">booking@cabanamusic.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-gold-accent text-xl w-6" />
                <span className="font-inter text-silver">+256 123 456 789</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-gold-accent text-xl w-6" />
                <span className="font-inter text-silver">Kampala, Uganda</span>
              </div>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold text-xl text-white mb-6">
                Follow Cabana
              </h4>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-silver hover:text-gold-accent transition-colors duration-300"
                >
                  <FaInstagram className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  className="text-silver hover:text-gold-accent transition-colors duration-300"
                >
                  <FaSpotify className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  className="text-silver hover:text-gold-accent transition-colors duration-300"
                >
                  <FaYoutube className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  className="text-silver hover:text-gold-accent transition-colors duration-300"
                >
                  <FaApple className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  className="text-silver hover:text-gold-accent transition-colors duration-300"
                >
                  <FaTwitter className="w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full p-4 bg-transparent border border-silver text-white font-inter placeholder-silver focus:border-gold-accent focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full p-4 bg-transparent border border-silver text-white font-inter placeholder-silver focus:border-gold-accent focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                  <SelectTrigger className="w-full p-4 bg-deep-black border border-silver text-white font-inter focus:border-gold-accent focus:outline-none transition-colors duration-300">
                    <SelectValue placeholder="Inquiry Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-deep-black border-silver">
                    <SelectItem value="booking" className="text-white hover:bg-gold-accent hover:text-deep-black">
                      Booking Request
                    </SelectItem>
                    <SelectItem value="collaboration" className="text-white hover:bg-gold-accent hover:text-deep-black">
                      Collaboration
                    </SelectItem>
                    <SelectItem value="media" className="text-white hover:bg-gold-accent hover:text-deep-black">
                      Media & Press
                    </SelectItem>
                    <SelectItem value="general" className="text-white hover:bg-gold-accent hover:text-deep-black">
                      General Inquiry
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Textarea
                  rows={6}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full p-4 bg-transparent border border-silver text-white font-inter placeholder-silver focus:border-gold-accent focus:outline-none transition-colors duration-300 resize-vertical"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gold-accent hover:bg-opacity-90 text-deep-black font-montserrat font-semibold py-4 transition-all duration-300"
              >
                SEND MESSAGE
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
