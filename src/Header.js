import React from "react"
import * as githubLogo from "./img/githublogo.png"
import * as lambdaLogo from "./img/lambdalogo.png"



const Header = (props) => {
    return (
        <div className="header">
            <img className="lambda-logo" src={lambdaLogo} alt="lambda"/>
            <div className="title">
                <h1>Github Network</h1>
                <form onSubmit = {props.handleSubmit}>
                    <input
                        className="text-input"
                        name="searchValue"
                        type='text' 
                        value={props.searchValue}
                        onChange={props.handleChange}
                        placeholder="Search Github username"
                    />
                    <button className="search-button">Search</button>
                </form>
                <h2>{props.mainUser.name}</h2>
            </div>
            <img className="github-logo" src={githubLogo} alt="github"/>
            
        </div>
    )
}

export default Header