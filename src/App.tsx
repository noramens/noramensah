import React from 'react';
import Header from './src/components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/components/Home';
import Blog from './src/components/Blog';
import About from './src/components/About';
import Footer from './src/components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<h6>this page is not found</h6>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
