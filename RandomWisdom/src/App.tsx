import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import QuoteGenerator from "./pages/QuoteGenerator";
import AdviceGenerator from "./pages/AdviceGenerator";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/"  element={<Welcome />} />
          <Route path="/quotes" element={<QuoteGenerator />} />
          <Route path="/advices" element={<AdviceGenerator />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
