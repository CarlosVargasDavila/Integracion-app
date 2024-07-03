import Grafica from "../components/grafica"
import { useLocation, useNavigate } from "react-router-dom"
import { RxPlus } from "react-icons/rx";
import "../static/css/grafica.css"
const GraficaPage = () => {
    const location = useLocation()
    const {tabla} = location.state
    const {grado} = location.state
    const tabla_iterar = grado ? Array.from({ length: grado  }, (_, index) => index + 1) : null
    const navigate = useNavigate()
    console.log(tabla_iterar)
    const datosEjey = !grado ? tabla.map(dato => {
        return dato[2]
    }) :  tabla_iterar.map((dato, index) => tabla[2][index]);

    const datosEjeX = !grado ? tabla.map(dato => {
        return dato[1]
    }) : tabla_iterar.map((dato, index) => tabla[1][index]);
    const regresar = () => {
        navigate(-1)
    
    }
    return(
        <div>
            <div className="regresar-container">
                <button className="btn-regresar" onClick={regresar}><RxPlus/>Regresar</button>
            </div>
            <Grafica
            ejex={datosEjeX}
            ejey={datosEjey}
            />

        </div>
        
    )
}

export default GraficaPage