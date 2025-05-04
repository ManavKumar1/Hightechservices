import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ServicesPage from "./pages/Services/Services";
import TestimonialsPage from "./pages/Testimonials/Testimonials";
import ContactPage from "./pages/Contact/Contact";
import "./App.scss";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  return (
    <Router>
      <div className='app'>
        <ScrollToTop />
        <Navbar />
        <main className='app__main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/testimonials' element={<TestimonialsPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
