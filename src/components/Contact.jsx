import React from 'react'
import mail from '../public/images/gmail-circle.png'
import wsp from '../public/images/whatsapp-circle.png'
import linkedin from '../public/images/linkedin-circle.png'

const Contact = () => {
    return (
        <section id="contact">
            <h5 className="subtitle">Contacto</h5>
            <p className="text"><a className="text" href="mailto:arielbvergara@gmail.com"><img src={mail} alt=""/>arielbvergara@gmail.com</a></p>
            <p className="text"><a className="text" href="https://api.whatsapp.com/send?phone=5491162064526&text=¡Hola!"><img src={wsp} alt=""/>+541562064526</a></p>
            <p className="text"><a className="text" href="https://www.linkedin.com/in/abvergara"><img src={linkedin} alt=""/>www.linkedin.com/in/abvergara</a></p>
        </section>
    )
}

export default Contact
