import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Countries } from "./components/Countries/Countries";
import { Navbar } from "./components/Navbar/Navbar";
import { CountryByName } from "./components/CountryByName/CountryByName";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Countries />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/country/:name" element={<CountryByName />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
