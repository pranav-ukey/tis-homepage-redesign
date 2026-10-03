import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Stats from "./components/sections/Stats";
import Academics from "./components/sections/Academics";
import Sports from "./components/sections/Sports";
import Admissions from "./components/sections/Admissions";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/effects/ScrollProgress";
import CustomCursor from "./components/effects/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Stats />
        <Academics />
        <Sports />
        <Admissions />
        
      </main>

      <Footer />
    </>
  );
}

export default App;