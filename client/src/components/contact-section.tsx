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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
    <section id="contact" className="py-32 bg-light-grey">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair font-bold text-5xl md:text-6xl text-deep-black mb-6">
            Get In Touch
          </h2>
          <p className="font-inter text-xl text-charcoal max-w-2xl mx-auto">
            Ready to start your next music project? Contact us today for bookings, collaborations, and business inquiries
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair font-semibold text-2xl text-deep-black mb-8">
              Contact Information
            </h3>

            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="bg-gold-accent rounded-full p-3 flex-shrink-0">
                  <Phone className="text-deep-black w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-deep-black mb-1">Phone</h4>
                  <span className="font-inter text-charcoal">+256 123 456 789</span>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gold-accent rounded-full p-3 flex-shrink-0">
                  <Mail className="text-deep-black w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-deep-black mb-1">Email</h4>
                  <span className="font-inter text-charcoal">booking@cabanamusic.com</span>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gold-accent rounded-full p-3 flex-shrink-0">
                  <MapPin className="text-deep-black w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-deep-black mb-1">Location</h4>
                  <span className="font-inter text-charcoal">Kampala, Uganda</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold text-xl text-deep-black mb-6">
                Follow Cabana
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-deep-black hover:bg-gold-accent text-white hover:text-deep-black p-3 rounded-full transition-all duration-300"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-deep-black hover:bg-gold-accent text-white hover:text-deep-black p-3 rounded-full transition-all duration-300"
                >
                  <FaSpotify className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-deep-black hover:bg-gold-accent text-white hover:text-deep-black p-3 rounded-full transition-all duration-300"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-deep-black hover:bg-gold-accent text-white hover:text-deep-black p-3 rounded-full transition-all duration-300"
                >
                  <FaApple className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-deep-black hover:bg-gold-accent text-white hover:text-deep-black p-3 rounded-full transition-all duration-300"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="font-playfair font-semibold text-2xl text-deep-black mb-8">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal mb-2">
                    First Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="w-full p-4 bg-light-grey border border-silver rounded-lg text-deep-black font-inter placeholder-charcoal focus:border-gold-accent focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal mb-2">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="w-full p-4 bg-light-grey border border-silver rounded-lg text-deep-black font-inter placeholder-charcoal focus:border-gold-accent focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block font-inter text-sm font-medium text-charcoal mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full p-4 bg-light-grey border border-silver rounded-lg text-deep-black font-inter placeholder-charcoal focus:border-gold-accent focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block font-inter text-sm font-medium text-charcoal mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full p-4 bg-light-grey border border-silver rounded-lg text-deep-black font-inter placeholder-charcoal focus:border-gold-accent focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block font-inter text-sm font-medium text-charcoal mb-2">
                  Project Type
                </label>
                <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                  <SelectTrigger className="w-full p-4 bg-light-grey border border-silver rounded-lg text-deep-black font-inter focus:border-gold-accent focus:outline-none transition-colors duration-300">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-silver rounded-lg">
                    <SelectItem value="booking" className="text-deep-black hover:bg-gold-accent hover:text-deep-black">
                      Booking Request
                    </SelectItem>
                    <SelectItem value="collaboration" className="text-deep-black hover:bg-gold-accent hover:text-deep-black">
                      Collaboration
                    </SelectItem>
                    <SelectItem value="media" className="text-deep-black hover:bg-gold-accent hover:text-deep-black">
                      Media & Press
                    </SelectItem>
                    <SelectItem value="general" className="text-deep-black hover:bg-gold-accent hover:text-deep-black">
                      General Inquiry
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block font-inter text-sm font-medium text-charcoal mb-2">
                  Message
                </label>
                <Textarea
                  rows={5}
                  placeholder="Please describe your project in a few sentences..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full p-4 bg-light-grey border border-silver rounded-lg text-deep-black font-inter placeholder-charcoal focus:border-gold-accent focus:outline-none transition-colors duration-300 resize-vertical"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gold-accent hover:bg-opacity-90 text-deep-black font-montserrat font-semibold py-4 rounded-lg transition-all duration-300"
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
