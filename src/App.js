import "./App.css";
import Autorization from "./Pages/Autorization";
import Confirmation from "./Pages/Confirmation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Autorization />} />
        <Route path="confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
