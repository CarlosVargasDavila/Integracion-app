import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import RungeKutta3 from "./pages/runge_kutta3";
import GraficaPage from "./pages/graficaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SideBar/>}>
          <Route path="/" element = {<Index/>}/>
          <Route path="/grafica" element={<GraficaPage/>}/>
          <Route path="/runge-kutta-3" element={<RungeKutta3/>}/>
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
