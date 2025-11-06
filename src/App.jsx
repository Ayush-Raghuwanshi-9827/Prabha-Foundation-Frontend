import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"; // Create later

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import PrabhaFoundationCare from "./Pages/PrabhaFoundationCare";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/prabha-foundation-care"
              element={<PrabhaFoundationCare />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
