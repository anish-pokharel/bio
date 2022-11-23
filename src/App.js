import "./App.css";
import Features from "./components/Features/Features";
import Header from "./components/Head/Header";
import Home from "./components/Hero/Home";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />;
      <Home />
      <Features />
      <Portfolio />
    </>
  );
}

export default App;
