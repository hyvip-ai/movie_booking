import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TotalCost from "./components/TotalCost";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
function App() {
  const [totalCost,setTotalCost] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/booking/:rows" element={<Booking setTotalCost={setTotalCost} totalCost={totalCost}/>} />
      <Route path="/payment" element={<TotalCost totalCost={totalCost} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
