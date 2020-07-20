import React from 'react'
import profilePicture from '../public/images/foto-cv.gif'
import '../public/css/profile.css'

const Profile = () => {
    return (
        // <div id="profile" className="card mb-3">
        //     <div className="row no-gutters">
        //         <div className="col-lg-5 col-md-4 text-center">
        //             <img src={profilePicture} className="card-img" alt="..." />
        //         </div>
        //         <div className="col-lg-7 col-md-8" style={{ display: "flex", alignItems: "center" }}>
        //             <div className="card-body">
        //                 <h1 className="card-title title">Ariel Bernardo Vergara</h1>
        //                 <h3 className="card-text subtitle">Desarrollador Full Stack .NET</h3>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <section id="profile">
            <div className="row no-gutters">
                <div className="col-lg-4 col-md-4 col-xs-12">
                    <img src={profilePicture} className="card-img" alt="..." />
                </div>
                <div className="col-lg-8 col-md-8 col-xs-12" style={{ display: "flex", alignItems: "center" }}>
                    <div className="pl-3">
                        <h1 className="card-title title">Ariel Bernardo Vergara</h1>
                        <h3 className="card-text subtitle">Desarrollador Full Stack .NET</h3>   
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Profile
