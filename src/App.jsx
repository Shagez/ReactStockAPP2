import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path="/stock/:symbol" element={<Stock />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
