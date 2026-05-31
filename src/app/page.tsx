import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedArticles from "@/components/FeaturedArticles";
import TechStack from "@/components/TechStack";
import CurrentFocus from "@/components/CurrentFocus";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <FeaturedArticles />
      <TechStack />
      <CurrentFocus />
      <Contact />
      <Footer />
    </main>
  );
}