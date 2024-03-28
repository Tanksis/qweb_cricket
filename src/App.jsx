import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Member from './pages/Involved/Member';

function App() {
  return (
    <div style={{height: '100%'}}>
    <Router>
      <div id="outer-container" style={{height: '100%'}}>
        <Navbar />
        <div id="page-wrap" style={{height: '100%', overflow: 'auto'}}>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/involved" element={<Member />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </div>
  );
};

export default App;
