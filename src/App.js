import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import RungeKutta3 from "./pages/runge_kutta3";
import GraficaPage from "./pages/graficaPage";
import InterpolacionNewton from "./pages/InterpolacionNewton";
import Trapecio from "./pages/trapecio";
import NotFound from "./pages/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SideBar/>}>
          <Route path="/" element = {<Index/>}/>
          <Route path="/grafica" element={<GraficaPage/>}/>
          <Route path="/runge-kutta-3" element={<RungeKutta3/>}/>
          <Route path="/interpolacion-newton" element={<InterpolacionNewton/>}/>
          <Route path="/trapecio" element={<Trapecio/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
