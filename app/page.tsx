import TopBar from "@/components/top-bar";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import WhyChooseUs from "@/components/why-choose-us";
import Blog from "@/components/blog";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
