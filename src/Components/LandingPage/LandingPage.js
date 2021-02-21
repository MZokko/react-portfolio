import React from 'react'
import Resume from '../resume/index'
import Portefolio from '../portefolio/index'
import Services from '../Services/Services'
import MyGitFeed from '../MyGitFeed/MyGitFeed'

function LandingPage() {
    return (
        <div>

            <Services/>
            <MyGitFeed/>
            <Portefolio/>
            <Resume/>
            
        </div>
    )
}

export default LandingPage
