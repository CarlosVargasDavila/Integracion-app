import { useState } from 'react';
import ObtenerDatosRk3 from '../api/rk-3';
import '../static/css/rk-3.css'
import { RxPlus } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
const RungeKutta3 = () => {
    const [funcion, setFuncion] = useState("")
    const [x0, setX0] = useState("")
    const [y0, setY0] = useState("")
    const [xn, setXn] = useState("") 
    const [n, setN] = useState("")
    const [h, setH] = useState("")
    const [tabla, setTabla] = useState([])
    const navigate = useNavigate()
    const CalcularRk3 = async() => {
        try
        {
            const data = {
                funcion,
                x0,
                y0,
                xn,
                n
            }
            const respuesta = await ObtenerDatosRk3(data)
            if (respuesta.data.success)
            {
                setH(respuesta.data.h)
                setTabla(respuesta.data.tabla)

            }
            else
            {
                alert(respuesta.data.message)
            }
        }
        catch(e)
        {
            console.log(e)
            alert(e.response ? e.response.data.message : e.message)
        }
    }

    const limpiarDatos = () => {
        setX0("")
        setY0("")
        setFuncion("")
        setXn("")
        setN("")
        setH("")
        setTabla([])
    }

    const graficar = () => {
        navigate('/grafica', {state: {tabla:tabla}})
    }
     return (
        <div className="metodo-container">
            <div className="titulo">
                <p>Método de Runge Kutta 3</p>
            </div>
            <div className="cuerpo">
                <div className="input-side">
                    <div className="input-container">
                        <label>F'(X)</label>
                        <input 
                        type='text' 
                        className='input'
                        value={funcion}
                        onChange={(e) => setFuncion(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>X(0)</label>
                        <input 
                        type='text' 
                        className='input'
                        value={x0}
                        onChange={(e) => setX0(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>Y(0)</label>
                        <input 
                        type='text' 
                        className='input'
                        value={y0}
                        onChange={(e) => setY0(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>X(n)</label>
                        <input 
                        type='text' 
                        className='input'
                        value={xn}
                        onChange={(e) => setXn(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>n</label>
                        <input 
                        type='text' 
                        className='input'
                        value={n}
                        onChange={(e) => setN(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>Calculo de h</label>
                        <input 
                        type='text' 
                        className='input' 
                        value={h}
                        disabled/>
                    </div>
                </div>
                <div className="table-side">
                    <p>Tabla de contenido en método Runge Kutta 3</p>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>i</th>
                                    <th>xi</th>
                                    <th>yi</th>
                                    <th>k</th>
                                    <th>f(xi + 3/4h, yi + 3/4k)</th>
                                    <th>yi+1</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                    {tabla.length > 0 ?
                                    tabla.map(tabla_item => {
                                        return (
                                        <tr key={Math.random()}>
                                        { tabla_item.map(columna => {
                                            return (
                                                <td key={Math.random()}>{columna}</td>
                                            )
                                        }) }
                                        </tr>
                                    )
                                    })    
                                : null}
                            </tbody>
                        </table>
                    </div>
                    <div className="botones-container">
                        <button onClick={limpiarDatos}><RxPlus/>Limpiar</button>
                        <button onClick={graficar}><RxPlus/>Generar grafica</button>
                    </div>

                    <button className='btn-calcular' onClick={CalcularRk3}><RxPlus/>Calcular</button>
                </div>
            </div>
            
        </div>
    )
}

export default RungeKutta3