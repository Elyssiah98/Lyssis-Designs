import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "./Components/ScrollToTop";
//import ThemeToggle from './Pages/ThemeToggle';

import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import SearchResults from "./Pages/SearchResults/SearchResults";

import Home from "./Pages/HomePage/Home";

import About from "./Pages/About/About";
import PastEvents from "./Pages/PastEvents/PastEvents";
import EventPost from "./Pages/PastEvents/EventPost";

import Portfolio from "./Pages/Portfolio/Portfolio";
import CostumePortfolio from "./Pages/Costumes/CostumePortfolio";
import CostumePost from "./Pages/Costumes/CostumePost";
import Aerials from "./Pages/Aerials/Aerials";
import AerialPost from "./Pages/Aerials/AerialPost";
import VisualArt from "./Pages/VisualArts/VisualArts";
import ArtPost from "./Pages/VisualArts/ArtPost";

import BlogHome from "./Pages/Blog/BlogHome";
import BlogPost from "./Pages/Blog/BlogPost";
import TagPostsPage from "./Pages/Blog/TagPostsPage";

import Contact from "./Pages/Contact/Contact";
import FAQs from "./Pages/Contact/FAQs";

import Terms from "./Pages/Legal/TermsAndConditions";
import Privacy from "./Pages/Legal/PrivacyPolicy";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      

      <div className="wrapper">
        {!isHome && <Header />}

        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/" element={<Home />} />

            <Route path="/About" element={<About />} />
            <Route path="/PastEvents" element={<PastEvents />} />
            <Route path="/events/:slug" element={<EventPost />} />

            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/costumes" element={<CostumePortfolio />} />
            <Route path="/costumes/:slug" element={<CostumePost />} />
            <Route path="/Aerials" element={<Aerials />} />
            <Route path="/aerials/:slug" element={<AerialPost />} />
            <Route path="/VisualArts" element={<VisualArt />} />
            <Route path="/arts/:slug" element={<ArtPost />} />
            
            <Route path="/blog" element={<BlogHome />} />
            <Route path="/blog/:category/*" element={<BlogPost />} />
            <Route path="/tag/:tag" element={<TagPostsPage />} />

            <Route path="/Contact" element={<Contact />} />
            <Route path="/FAQs" element={<FAQs />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Privacy" element={<Privacy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;