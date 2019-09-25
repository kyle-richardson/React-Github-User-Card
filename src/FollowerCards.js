import React from "react"
import styled from "styled-components"



const FollowerCards = (props) => {

    const Card = styled.div`
        border: 2px solid black;
        display: flex;
        flex-direction: row;
        margin: 20px auto;
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
                        <div>
                            <h2>{follower.name}</h2>
                            <p>{follower.login}</p>
                            <a href={follower.htmlUrl}>{follower.htmlUrl}</a>
                            <p>Followers: {follower.followers}</p>
                            <p>Following: {follower.following}</p>
                            <p>Location: {follower.location}</p>
                            <p className={follower.bio?'show':'hide'}>Bio: {follower.bio}</p>
                        </div>
                        
                        
                    </Card>
                )
            })}
        </div>
    )
}

export default FollowerCards