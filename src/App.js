import "./App.css";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Tours from "./components/tours";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
