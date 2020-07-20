import React from 'react'

import '../public/css/personalInformation.css'

const PersonalInformation = () => {
    return (
        <section id="personal-information">
            <h5 className="subtitle">Información personal</h5>
            <label htmlFor="" className="title">Fecha de nacimiento</label>
            <p className="text">10 de enero de 1995</p>
            <label htmlFor="" className="title">Nacionalidad</label>
            <p className="text">Argentina</p>
            <label htmlFor="" className="title">Domicilio</label>
            <p className="text">French 2365, Recoleta, Cap. Fed.</p>
            <label htmlFor="" className="title">Estado civil</label>
            <p className="text">Soltero</p>
        </section>
    )
}

export default PersonalInformation
