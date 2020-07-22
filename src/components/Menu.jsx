import React from 'react'
import '../public/css/menu.css'

const Menu = (props) => {

    const {isActive} = props;

    return (
        <ul id="menu" className={isActive ? "nav flex-column is-active":"nav flex-column"}>
            <li className="nav-item">
                <a className="nav-link active" href="#profile">Perfil</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#personal-information">Información personal</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">Contacto</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#experience">Experiencia</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#knowledge">Conocimientos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#specific-training">Conocimientos especificos</a>
            </li>
            
        </ul>
    )
}

export default Menu
