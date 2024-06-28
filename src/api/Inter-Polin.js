import axios from "axios";

const ObtenerDatosInterPoli = (data) => axios.post(
    "http://localhost:8000/api/v1/metodos/Interpolacion_Newton", 
    data
)

export default ObtenerDatosInterPoli