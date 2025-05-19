import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./Pages/Header";
import Footer from "./Pages/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Aerials from "./Pages/Aerials";
import Portfolio from "./Pages/Portfolio";
import BlogHome from "./Pages/Blog/BlogHome";
import BlogPost from "./Pages/Blog/BlogPost";
import Contact from "./Pages/Contact/Contact";
import FAQs from "./Pages/Contact/FAQs";
function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Aerials" element={<Aerials />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/Contact/Contact" element={<Contact />} />
        <Route path="/Contact/FAQs" element={<FAQs />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App
