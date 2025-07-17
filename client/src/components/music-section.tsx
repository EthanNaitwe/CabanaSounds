import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";

const tracks = [
  {
    id: 1,
    title: "Soul of Uganda",
    duration: "4:32",
    description: "A powerful anthem celebrating the rich cultural heritage and musical traditions of Uganda, blending traditional rhythms with contemporary sounds.",
    releaseDate: "March 2024",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Rhythm of Home",
    duration: "3:45",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
  },
  {
    id: 3,
    title: "Moonlight Serenade",
    duration: "4:12",
    imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
  },
  {
    id: 4,
    title: "Dance of Joy",
    duration: "3:28",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
  },
];

export default function MusicSection() {
  const featuredTrack = tracks.find(track => track.isFeatured);
  const regularTracks = tracks.filter(track => !track.isFeatured);

  return (
    <section id="music" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair font-bold text-5xl md:text-6xl text-deep-black mb-6">
            Latest Music
          </h2>
          <p className="font-inter text-xl text-charcoal max-w-2xl mx-auto">
            Discover the latest tracks and explore Cabana's musical journey
          </p>
        </motion.div>

        {/* Featured Track */}
        {featuredTrack && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video bg-deep-black rounded-lg overflow-hidden shadow-2xl group">
                <img
                  src={featuredTrack.imageUrl}
                  alt={featuredTrack.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-gold-accent hover:bg-opacity-90 text-deep-black rounded-full p-6 transform hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 ml-1" />
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-4xl text-deep-black mb-4">
                  "{featuredTrack.title}"
                </h3>
                <p className="font-inter text-lg text-charcoal mb-6 leading-relaxed">
                  {featuredTrack.description}
                </p>
                <div className="flex items-center space-x-6 mb-8">
                  <span className="font-montserrat font-medium text-gold-accent">
                    Released: {featuredTrack.releaseDate}
                  </span>
                  <span className="font-montserrat font-medium text-charcoal">
                    {featuredTrack.duration}
                  </span>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-deep-black hover:bg-opacity-90 text-white px-6 py-3 font-montserrat font-medium transition-all duration-300 flex items-center gap-2">
                    <FaSpotify />
                    Spotify
                  </button>
                  <button className="bg-deep-black hover:bg-opacity-90 text-white px-6 py-3 font-montserrat font-medium transition-all duration-300 flex items-center gap-2">
                    <FaApple />
                    Apple Music
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Track List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularTracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-light-grey p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-square bg-deep-black mb-6 relative overflow-hidden">
                <img
                  src={track.imageUrl}
                  alt={track.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-deep-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-gold-accent text-deep-black rounded-full p-4 transform hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 ml-1" />
                  </button>
                </div>
              </div>
              <h4 className="font-playfair font-semibold text-xl text-deep-black mb-2">
                {track.title}
              </h4>
              <p className="font-inter text-charcoal mb-4">{track.duration}</p>
              <div className="flex space-x-3">
                <button className="text-charcoal hover:text-gold-accent transition-colors duration-300">
                  <FaSpotify className="w-6 h-6" />
                </button>
                <button className="text-charcoal hover:text-gold-accent transition-colors duration-300">
                  <FaApple className="w-6 h-6" />
                </button>
                <button className="text-charcoal hover:text-gold-accent transition-colors duration-300">
                  <FaYoutube className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
