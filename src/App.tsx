import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Countries } from "./components/Countries/Countries";
import { Navbar } from "./components/Navbar/Navbar";
import { CountryByName } from "./components/CountryByName/CountryByName";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/:name" element={<CountryByName />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
