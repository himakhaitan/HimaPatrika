import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Structure/Footer";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
