import About from "@/components/About";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import Welcome from "@/components/Welcome";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div>
      <Welcome />
      <About />
      <Project />
      <Contact />
      <Footer/>
    </div>
  );
}
