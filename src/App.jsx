import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Pricing from "./components/pricing";
import Testimonial from "./components/testimonial";
import Cta from "./components/cta";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;