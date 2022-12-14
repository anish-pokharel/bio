import "./App.css";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Footer from "./components/Footer";
import Header from "./components/Head/Header";
import Home from "./components/Hero/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <>
      <Header />;
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
