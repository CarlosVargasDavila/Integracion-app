import axios from "axios";
import APIURL from "./apiURL";

const ObtenerDatosInterPoli = (data) => axios.post(
    APIURL + "metodos/Interpolacion_Newton", 
    data
)

export default ObtenerDatosInterPoli