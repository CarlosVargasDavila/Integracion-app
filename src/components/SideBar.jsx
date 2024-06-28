import { Link, Outlet } from "react-router-dom"
import '../static/css/sidebar.css'
import cerebro from '../static/images/cerebro (2) 2.png'
import imagenPerfil from '../static/images/Rectangle 1650.png'
import { RxPlus } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";

const SideBar = () => {
    return(
        <div className="sidebar">
            <div className="left-side">
                <img src={cerebro} alt="logo-app" className="logo-app"/>
                <div className="texto-metodos-container">
                    <p className="texto-metodos">Métodos</p>
                </div>

                <div className="sidebar-container">
                    <div className="opciones-sidebar">
                        <button><Link to="/euler" className="contenido-boton"><RxPlus className="icono"/>Euler</Link></button>
                        <button><Link to="/euler_mejorado" className="contenido-boton"><RxPlus className="icono"/>Euler Mejorado</Link></button>
                        <button><Link to="/runge-kutta-3" className="contenido-boton"><RxPlus className="icono"/>Runge Kutta 3</Link></button>
                        <button><Link to="/interpolacion-newton" className="contenido-boton"><RxPlus className="icono"/>Interpolacion de Newton</Link></button>
                    </div>

                </div>
                
                <div>

                </div>
            </div>
            
            <div className="right-side">
                <div className="navbar">
                    <p>MÉTODOS NÚMERICOS CAMADA</p>
                    <div className="right-side-navbar">
                        <CiCircleQuestion className="question-mark"/>
                        <img src={imagenPerfil} alt="imagen"/>
                    </div>
                </div>
                <Outlet/>
            </div>
            
        </div>
    )
}

export default SideBar