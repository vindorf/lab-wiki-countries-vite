import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Navbar/>
<Routes>
<Route  path="/" element={ <HomePage /> } />
<Route  path="/:alpha3Code" element={ <CountryDetails /> } />
</Routes>

    </div>
  );
}

export default App;
