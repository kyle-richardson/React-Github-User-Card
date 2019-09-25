import React from "react"
import styled from "styled-components"



const FollowerCards = (props) => {

    const Card = styled.div`
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        margin: 20px auto;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 15px 0;
        width: 60%;
    `
    return (
        <div>
            {/* {console.log(props.followersList)} */}
            {props.followersList.map(follower =>{
                return (
                    <Card>
                        <img className="thumbnail" src={follower.avatarUrl} alt='thumbnail'/>
                        <h3>{follower.name}</h3>
                        <p>{follower.login}</p>
                        <a href={follower.htmlUrl}>{follower.htmlUrl}</a>
                        <p>Followers: {follower.followers}</p>
                        <p>Following: {follower.following}</p>
                        <p>Location: {follower.location}</p>
                        <p className={follower.bio?'show':'hide'}>Bio: {follower.bio}</p>
                    </Card>
                )
            })}
        </div>
    )
}

export default FollowerCards