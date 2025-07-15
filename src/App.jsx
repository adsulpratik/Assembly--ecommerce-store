import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';
import Specific from './components/specific';
import Cart from './components/Cart';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ProductProvider } from './components/Context';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.from(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div ref={boxRef}>
      <ProductProvider>
        <Router>
          <div className="w-screen bg-zinc-800 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Page1 />
                      <Page2 />
                      <div className="sepline"></div>
                      <Page3 />
                      <Page4 />
                      <Page5 />
                      <Page6 />
                      <Footer />
                    </>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/specific/:title/:image/:description/:price" element={<Specific />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ProductProvider>
    </div>
  );
}

export default App;
