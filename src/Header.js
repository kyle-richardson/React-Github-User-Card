import React from "react"
import * as githubLogo from "./img/githublogo.png"
import * as lambdaLogo from "./img/lambdalogo.png"



const Header = (props) => {
    return (
        <div className="header">
            <img className="lambda-logo" src={lambdaLogo} alt="lambda"/>
            <div className="title">
                <h1>Github Network</h1>
                <h2>{props.mainUser.name}</h2>
                <form onSubmit = {props.handleSubmit}>
                    <input 
                        name="searchValue"
                        type='text' 
                        value={props.searchValue}
                        onChange={props.handleChange}
                        placeholder="Search Github username"
                    />
                    <button>Search</button>
                </form>
            </div>
            <img className="github-logo" src={githubLogo} alt="github"/>
            
        </div>
    )
}

export default Header