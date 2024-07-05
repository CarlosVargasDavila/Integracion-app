import axios from "axios";
import APIURL from "./apiURL";
const ObtenerDatosTrapecio = (data) => axios.post(
    APIURL + "metodos/metodo-trapecio",
    data
)

export default ObtenerDatosTrapecio