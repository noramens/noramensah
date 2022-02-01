import React from 'react';
import Header from './components/common/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Footer from './components/common/Footer';
import CSSUnits from './components/pages/blogs/CSSUnits';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/accessibility-in-css-units" element={<CSSUnits />} />
        <Route path="*" element={<h6>this page is not found</h6>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
