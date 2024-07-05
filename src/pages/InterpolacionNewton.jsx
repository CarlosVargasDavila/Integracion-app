import { useState } from "react"
import ObtenerDatosInterPoli from "../api/Inter-Polin";
import { RxPlus } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const InterpolacionNewton= ()=>
{
    const [grado, setGrado] = useState('')
    const cantidad = Array.from({ length: grado.length > 0 ? grado * 2 + 2 : 0 }, (_, index) => index + 1);
    const [xi,setXi]=useState([])
    const [fxi,setFxi]=useState([])
    const [table, setTable]=useState([])
    const [coeficientes, setCoeficientes] = useState([])
    const [polinomio, setPolinomio] = useState("")
    const [error, setError] = useState(null)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const CalcularInterPolin = async() => {
        setError(null)
        setOpen(true)
        try
        {
            const data = {
             grado,
               xi,
               fxi
            }
            const respuesta = await ObtenerDatosInterPoli(data)
            console.log(respuesta)
            if (respuesta.data.success)
            {
               setTable(respuesta.data.tabla)
               setCoeficientes(respuesta.data.coeficientes)
               setPolinomio(respuesta.data.polinomio)
               setOpen(false)

            }
            else
            {
                setError(respuesta.data.message)
                setOpen(false)
            }
        }
        catch(e)
        {
            setOpen(false)
            setError(e.response ? e.response.data.message : e.message)
        }
    }
    const limpiarDatos = ()=> {
        setGrado("")
        setXi("")
        setFxi("")
        setTable("")
        setCoeficientes("")
        setPolinomio("")
    }

    const handleChange = (index, value) => {
        const newXi = [...xi];
        const newFxi = [...fxi];

        if (index % 2 === 0) {
            newXi[Math.floor(index / 2)] = value;
            setXi(newXi);
        } else {
            newFxi[Math.floor(index / 2)] = value;
            setFxi(newFxi);
        }
    };
    const graficar = () =>{
        navigate('/grafica',{state:{tabla:table, grado: parseInt(grado) + 1}})
    }

    return(
        <div className="metodo-container">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className="titulo">
                <p>Método de Interpolación de Newton</p>
            </div>
            {error && (
                <Alert severity="error">{error}</Alert>
            )}
            <div className="cuerpo">
                <div className="input-side">
                    <div className="input-container">
                        <label>Grados</label>
                        <input min={1}
                        type='text' 
                        className='input'
                        value={grado}
                        onChange={(e) => setGrado(e.target.value)}
                        />
                    </div>

                    {cantidad.length > 0  ? 
                    cantidad.map((i, index) => {
                        return (
                        <div className="input-container" key={index}>    
                            <label >{index%2===0?'xi':'f(xi)'}</label>
                            <input
                            type= 'text' className ='input'
                            onChange={(e) => handleChange(index, e.target.value)}

                            />
                        
                        </div>
                        )
                    })
                     : null}
                </div>
                <div className="table-side">
                    <p>Tabla de contenido en Interpolación de Newton</p>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>i</th>
                                    <th>xi</th>
                                    <th>f(xi)</th>
                                    <th>f[xi,xi+1]</th>
                                    <th>f[xi,xi+1,xi+2] </th>
                                    <th>f[x0,x1,x2,x3]</th>
                                </tr>
                            </thead>
                            <tbody>
                            {table.length > 0 && (table[0].map((item, index) => (
                                <tr key={index}>
                                <td>{table[0][index]}</td>
                                <td>{table[1][index]}</td>
                                <td>{table[2][index]}</td>
                                <td>{table[3][index]}</td>
                                <td>{table[4][index]}</td>
                                <td>{table[5][index]}</td>
           
                                </tr>
                            )))}
                                   
                            </tbody>
                            </table>
                           <div>
                                <p>Valores de los coeficientes</p>
                                {coeficientes.length > 0 &&(
                                    coeficientes.map((coeficiente, index) => {
                                        return (
                                        <p key={index}>a{index} = {coeficiente}</p>
                                        )
                                    })
                                )}
                                <p>Ecuacion: {polinomio}</p>
                           </div>
                            </div>

                            <div className="botones-container">
                        <button onClick={limpiarDatos}><RxPlus/>Limpiar</button>
                        <button onClick={graficar}><RxPlus/>Generar grafica</button>
                    </div>
                            <button className='btn-calcular' onClick={CalcularInterPolin}><RxPlus/>Calcular</button>
                </div>

                
        </div>
        </div> 
        
    )
}
export default InterpolacionNewton 