import Grafica from "../components/grafica"
import { useLocation, useNavigate } from "react-router-dom"
import { RxPlus } from "react-icons/rx";
import "../static/css/grafica.css"
const GraficaPage = () => {
    const location = useLocation()
    const {tabla} = location.state
    const navigate = useNavigate()
    const datosEjey = tabla.map(dato => {
        return dato[2]
    })
    const datosEjeX = tabla.map(dato => {
        return dato[1]
    })

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