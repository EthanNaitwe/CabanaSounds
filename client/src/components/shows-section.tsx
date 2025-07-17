import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const shows = [
  {
    id: 1,
    venue: "Kampala Music Festival",
    location: "National Theatre, Kampala, Uganda",
    date: "MAY 15",
    time: "8:00 PM",
    description: "Special headlining performance featuring new tracks and fan favorites",
  },
  {
    id: 2,
    venue: "East African Music Awards",
    location: "Serena Conference Centre, Kampala",
    date: "JUN 22",
    time: "7:30 PM",
    description: "Performance and nomination celebration for Best New Artist",
  },
  {
    id: 3,
    venue: "Nyege Nyege Festival",
    location: "Jinja, Uganda",
    date: "SEP 14",
    time: "9:00 PM",
    description: "International showcase at Uganda's premier music festival",
  },
];

export default function ShowsSection() {
  return (
    <section id="shows" className="py-32 bg-light-grey">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair font-bold text-5xl md:text-6xl text-deep-black mb-6">
            Upcoming Shows
          </h2>
          <p className="font-inter text-xl text-charcoal max-w-2xl mx-auto">
            Don't miss the chance to experience Cabana live in concert
          </p>
        </motion.div>

        <div className="space-y-6">
          {shows.map((show, index) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gold-accent"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="font-playfair font-semibold text-2xl text-deep-black mb-2">
                    {show.venue}
                  </h3>
                  <p className="font-inter text-charcoal mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gold-accent" />
                    {show.location}
                  </p>
                  <p className="font-inter text-charcoal">{show.description}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  <div className="text-center lg:text-right">
                    <p className="font-montserrat font-bold text-2xl text-deep-black">
                      {show.date}
                    </p>
                    <p className="font-inter text-charcoal">{show.time}</p>
                  </div>
                  <button className="bg-gold-accent hover:bg-opacity-90 text-deep-black font-montserrat font-semibold px-8 py-3 transition-all duration-300 whitespace-nowrap flex items-center gap-2">
                    BUY TICKETS
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="border-2 border-deep-black hover:bg-deep-black hover:text-white text-deep-black font-montserrat font-semibold px-8 py-4 transition-all duration-300">
            VIEW ALL SHOWS
          </button>
        </motion.div>
      </div>
    </section>
  );
}
