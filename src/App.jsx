import Footer from "./components/Footer.jsx";
import "./components/Header.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import CV from "./pages/CV.jsx";
import Skills from "./pages/Skills.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Padding wegen fixed Header */}
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
