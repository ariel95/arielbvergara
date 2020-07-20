import React from 'react'
import '../public/css/experience.css'

const Experience = () => {
    return (
        <section id="experience" className="pl-3">
            <h5 className="subtitle">Experiencia</h5>
            {/* Experiencia 1 */}
            <label className="title mb-1">Desarrollador Ssr. Full Stack .NET</label>
            <p className="text mb-1"><a className="text link" href="http://www.redsis.com.ar/clientes.asp">REDSIS – REDES Y SISTEMAS INTEGRADOS S.A.S / DANONE</a></p>
            <p className="text mb-1">(Abril 2020 – Actualidad) </p>
            <ul>
                <li className="text">Encargado de proyecto de impresión de documentación de Lógistica.</li>
                <li className="text">Desarrollo y mantenimiento de interfaces Web Services.</li>
                <li className="text">Mantenimiento y soporte a aplicaciones web.</li>
            </ul>
            {/* Experiencia 2*/}
            <label className="title mb-1">Desarrollador Full Stack .NET</label>
            <p className="text mb-1"><a className="text link" href="https://www.nosis.com/">NOSIS LABORATORIO DE INVESTIGACIÓN Y DESARROLLO S.A.</a></p>
            <p className="text mb-1">(Diciembre 2017 – Febrero 2020)</p>
            <ul>
                <li className="text">Análisis, diseño e implementación de proyectos.</li>
                <li className="text">Análisis, diseño e implementación de base de datos relacionales.</li>
                <li className="text">Desarrollo de aplicaciones web (Back-End y Front-End).</li>
                <li className="text">Desarrollo de aplicaciones de escritorio.</li>
                <li className="text">Mantenimiento y soporte a aplicaciones web.</li>
            </ul>
        </section>
    )
}

export default Experience
