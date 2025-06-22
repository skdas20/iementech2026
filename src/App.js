import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/NewNavbar';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Topics from './pages/Topics';
import KeyDates from './pages/KeyDates';
import Submissions from './pages/Submissions';
import Organizing from './pages/Committee/Organizing';
import Advisory from './pages/Committee/Advisory';
import Contact from './pages/Contact';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <>
        <GlobalStyles />
        <Loading onLoadingComplete={handleLoadingComplete} />
      </>
    );
  }

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/key-dates" element={<KeyDates />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/committee/organizing" element={<Organizing />} />
        <Route path="/committee/advisory" element={<Advisory />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
