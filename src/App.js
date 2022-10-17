import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import CoinPage from "./pages/CoinPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/coins" element={<CoinPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;