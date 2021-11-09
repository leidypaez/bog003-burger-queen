import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../Views/Home.jsx"
import Waiter from "../Views/Waiter.jsx"
import Chefs from "../Views/Chefs.jsx"
import Orders from "../Views/Orders.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Waiter/*" element={<Waiter />} />
        <Route path="Chefs/*" element={<Chefs />} />
        <Route path="Orders/*" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;


