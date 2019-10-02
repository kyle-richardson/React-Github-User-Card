import React from "react"
import styled from "styled-components"
import GitHubCalendar from 'react-github-calendar'



const FollowerCards = (props) => {

    const Card = styled.div`
        max-width: 640px;
        display: flex;
        flex-direction: row;
        padding: 20px;
        display: flex;
        border-radius: 5px;
        box-shadow: 0 1px 6px -2px #000;
        background-color: #FFF;
        margin: 0 auto;
        margin-bottom: 20px;
        :first-child {
            border: 2px solid black;
            box-shadow: 0 3px 8px -2px #000;
            @media (max-width: 600px) {
                border: 0;
            }
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
            {props.followersList.map((follower,ind) =>{
                return (<>
                    <div className="github">
                        {ind===0 && follower.login!=="kyle-richardson" ? <GitHubCalendar username={follower.login}/> : null}
                    </div>
                    <Card key={ind}>
                        <img className={ind===0 ? 'thumbnail-first' : 'thumbnail'} src={follower.avatarUrl} alt='thumbnail'/>
                        <div>
                            <h3>{follower.login}</h3>
                            <a className={follower.htmlUrl?'show':'hide'} href={follower.htmlUrl}>Github page</a>
                            <p className={follower.followers?'show':'hide'}>Followers: {follower.followers}</p>
                            <p className={follower.following?'show':'hide'}>Following: {follower.following}</p>
                            <p className={follower.location?'show':'hide'}>Location: {follower.location}</p>
                            <p className={follower.bio?'show':'hide'}>Bio: {follower.bio}</p>
                            <div className={ind===0 ? 'hide' : 'switch-button'} onClick={()=>props.handleSwitch(follower)}>Search using this user</div>
                        </div>
                    </Card>
                    
                    </>
                )
            })}
        </div>
    )
}

export default FollowerCards