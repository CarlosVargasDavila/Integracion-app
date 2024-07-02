import ObtenerDatosTrapecio from "../api/trapecio"
import { RxPlus } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Trapecio = () => {
    const [funcion, setFuncion] = useState("")
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [n, setN] = useState("")
    const [h, setH] = useState("")
    const [tabla, setTabla] = useState([])
    const [integral, setIntegral] = useState("")
    const navigate = useNavigate()
    const CalcularTrapecio = async() => {
        try
        {
            const data = {
                funcion,
                a,
                b,
                n,
            }
            const respuesta = await ObtenerDatosTrapecio(data)
            if (respuesta.data.success)
            {
                setH(respuesta.data.h)
                setTabla(respuesta.data.tabla)
                setIntegral(respuesta.data.integral)
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
        setA("")
        setB("")
        setFuncion("")
        setN("")
        setH("")
        setTabla([])
        setIntegral("")
    }

    const graficar = () => {
        navigate('/grafica', {state: {tabla:tabla}})
    }
     return (
        <div className="metodo-container">
            <div className="titulo">
                <p>Método del Trapecio</p>
            </div>
            <div className="cuerpo">
                <div className="input-side">
                    <div className="input-container">
                        <label>Funcion:</label>
                        <input 
                        type='text' 
                        className='input'
                        value={funcion}
                        onChange={(e) => setFuncion(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>a</label>
                        <input 
                        type='text' 
                        className='input'
                        value={a}
                        onChange={(e) => setA(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>b</label>
                        <input 
                        type='text' 
                        className='input'
                        value={b}
                        onChange={(e) => setB(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>Numero de iteraciones:</label>
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
                    <p>Tabla de contenido en método de Trapecio</p>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>i</th>
                                    <th>xi</th>
                                    <th>f(xi)</th>
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
                    <div>
                        <p>Valor de la integral: {integral}</p>
                    </div>
                    <div className="botones-container">
                        <button onClick={limpiarDatos}><RxPlus/>Limpiar</button>
                        <button onClick={graficar}><RxPlus/>Generar grafica</button>
                    </div>

                    <button className='btn-calcular' onClick={CalcularTrapecio}><RxPlus/>Calcular</button>
                </div>
            </div>
            
        </div>
     )
}

export default Trapecio