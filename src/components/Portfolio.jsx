import React from 'react'
import '../public/css/portfolio.css'

const Portfolio = () => {
    return (
        <div id="portfolio" className="btn-group dropleft">
            <button className="btn-actions" data-toggle="dropdown" style={{ marginBottom: "5px" }}>
                Portfolio
                </button>

            <div className="dropdown-menu">
                <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => window.location.href="https://recipies-91cf8.web.app/"}
                >
                    {/* <img src={spanish} alt="" /> */}
                    <span>Recipies</span>
                </button>
                {/* <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => window.location.href="https://recipies-91cf8.web.app/"}
                >
                    <span>Plomería Bautista Ángel</span>
                </button> */}
              
            </div>
        </div>
    )
}

export default Portfolio
