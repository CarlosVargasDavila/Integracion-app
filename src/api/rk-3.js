import axios from "axios";
import APIURL from "./apiURL";
const ObtenerDatosRk3 = (data) => axios.post(
    APIURL + "metodos/metodo-runge-kutta-3", 
    data
)

export default ObtenerDatosRk3