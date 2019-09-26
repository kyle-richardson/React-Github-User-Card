import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = (props) => {
    return (
        <div className = "footer">
            <div className="icon-container">
                <a href="mailto:kyle.richardson1@gmail.com"><FontAwesomeIcon className="icon" icon={faEnvelope}/></a>
                <a href="https://github.com/kyle-richardson"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                <a href="https://linkedin.com/in/kyle-m-richardson"><FontAwesomeIcon className="icon" icon={faLinkedin}/></a>
            </div>
            <p>Copyright Kyle Richardson 2019</p>
        </div>
    )
}

export default Footer