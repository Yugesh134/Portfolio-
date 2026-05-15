import Hero from "./components/sections/Hero";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Footer } from "./components/layout/Footer";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
