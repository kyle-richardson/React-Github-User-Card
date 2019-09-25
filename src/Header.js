import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import * as githubLogo from "./img/githublogo.png"
import * as lambdaLogo from "./img/lambdalogo.png"



const Header = (props) => {
    return (
        <div className="header">
            <img className="lambda-logo" src={lambdaLogo} alt="lambda"/>
            <div className="title">
                <h1>Github Network</h1>
                <h2>Kyle Richardson</h2>
                <a href="mailto:kyle.richardson1@gmail.com"><FontAwesomeIcon className="icon" icon={faEnvelope}/></a>
                <a href="https://github.com/kyle-richardson"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                <a href="https://linkedin.com/in/kyle-m-richardson"><FontAwesomeIcon className="icon" icon={faLinkedin}/></a>
            </div>
            <img className="github-logo" src={githubLogo} alt="github"/>
            
        </div>
    )
}

export default Header