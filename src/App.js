import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Education from './Education';
import Internships from './Internships';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />



        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
