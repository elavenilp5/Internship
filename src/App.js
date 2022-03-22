
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
