import React from "react"
import styled from "styled-components"
import GitHubCalendar from 'react-github-calendar'



const FollowerCards = (props) => {

    const Card = styled.div`
        max-width: 620px;
        display: flex;
        flex-direction: row;
        padding: 20px;
        display: flex;
        border-radius: 5px;
        box-shadow: 0 1px 6px -2px #000;
        background-color: #FFF;
        margin: 0 auto;
        margin-bottom: 30px;
        :first-child {
            border: 2px solid black;
            box-shadow: 0 3px 8px -2px #000;
        }
        @media (max-width: 600px) {
            max-width: 600px;
            box-shadow: 0 0 0 black;
            margin: 5px 0;
            border-radius: 0;
        }
    `
    return (
        <div>
            {/* <GitHubCalendar username='kyle-richardson'/> */}
            {props.followersList.map(follower =>{
                return (
                    <Card>
                        <img className="thumbnail" src={follower.avatarUrl} alt='thumbnail'/>
                        <div>
                            <h2>{follower.name}</h2>
                            <a href={follower.htmlUrl}>Github page</a>
                            <p>Username: {follower.login}</p>
                            <p>Followers: {follower.followers}</p>
                            <p>Following: {follower.following}</p>
                            <p className={follower.location?'show':'hide'}>Location: {follower.location}</p>
                            <p className={follower.bio?'show':'hide'}>Bio: {follower.bio}</p>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}

export default FollowerCards