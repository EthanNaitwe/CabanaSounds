import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import MusicSection from "@/components/music-section";
import GallerySection from "@/components/gallery-section";
import ShowsSection from "@/components/shows-section";
import StoreSection from "@/components/store-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-light-grey">
      <Navigation />
      <HeroSection />
      <MusicSection />
      <GallerySection />
      <ShowsSection />
      <StoreSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
