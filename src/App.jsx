import Footer from "./components/Footer.jsx";
import "./components/Header.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}