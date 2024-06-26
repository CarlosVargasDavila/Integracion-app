import axios from "axios";

const ObtenerDatosRk3 = (data) => axios.post(
    "http://localhost:8000/api/v1/metodos/metodo-runge-kutta-3", 
    data
)

export default ObtenerDatosRk3