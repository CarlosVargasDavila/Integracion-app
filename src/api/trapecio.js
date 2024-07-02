import axios from "axios";

const ObtenerDatosTrapecio = (data) => axios.post(
    "http://localhost:8000/api/v1/metodos/metodo-trapecio",
    data
)

export default ObtenerDatosTrapecio