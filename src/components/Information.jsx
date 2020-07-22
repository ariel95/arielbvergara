import React from 'react'
import PersonalInformation from './PersonalInformation'
import Experience from './Experience'
import Contact from './Contact'
import Studies from './Studies'
import Knowledge from './Knowledge'
import SpecificTraining from './SpecificTraining'

const Information = () => {
    return (
        <section id="information" className="mb-0" style={{padding:"10px"}}>
            <div className="row no-gutters">
                <div className="col-lg-4 col-md-4 col-xs-12">
                    <PersonalInformation />
                    <Contact />
                </div>
                <div className="experience col-lg-8 col-md-8 col-xs-12">
                    <Experience />
                    <Studies />
                    <Knowledge />
                    <SpecificTraining />
                </div>
            </div>
        </section>
    )
}

export default Information
