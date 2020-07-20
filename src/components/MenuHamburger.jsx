import React from 'react'
import Menu from './Menu'
import '../public/css/hamburguer.css'

const MenuHamburger = () => {

    const [isActive, setIsActive] = React.useState(false);

    const onClickHamburger = (e) => {
        setIsActive(!isActive)
    }

    return (
        <>
            <Menu isActive={isActive} />
            <div id="hamburger" className={isActive ? "hamburger hamburger--squeeze is-active" : "hamburger hamburger--squeeze"} type="button" onClick={onClickHamburger}>
                <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                </div>
            </div>
        </>

    )
}

export default MenuHamburger
