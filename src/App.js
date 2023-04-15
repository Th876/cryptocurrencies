//Import route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";
import "./style.css";


export default function App () {
  // We will use the Route component to specify each route
  return (
    <div className="App">
        <Nav />
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/currencies" element={<Currencies/>}/>
      <Route path="/price/:symbol" element={<Price/>}/>
    </Routes>
    </div>
  );
}

//API Key: C00ACCCE-B794-441A-80E1-70785C557552