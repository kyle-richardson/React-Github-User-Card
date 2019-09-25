import React from 'react';
import './App.css';
import axios from "axios"
import FollowerCards from "./FollowerCards"
import Header from "./Header"
import Footer from "./Footer"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
        bio:'',
        htmlUrl: '',
        avatarUrl: '',
        location: '',
        login: '',
        name: '',
        followers: 0,
        following: 0,
        key: ''
      },
      followersList: []
    }
  }

  

  componentDidMount = () => {
    const responseSet = (data) => {
      this.setState({
        user: {
          bio:data.bio,
          htmlUrl: data.html_url,
          avatarUrl: data.avatar_url,
          location: data.location,
          login: data.login,
          name: data.name,
          followers: data.followers,
          following: data.following,
          key: data.name
        },
    })
    return
  }
  const pushToList = () => {
    this.setState(prev => ({
      followersList: [...prev.followersList, this.state.user]
    }))
  }
    axios
      .get("https://api.github.com/users/kyle-richardson")
      .then (response => {
        const data = response.data
        responseSet(data)
      })
      .then(()=>{
        pushToList()
        return axios.get("https://api.github.com/users/kyle-richardson/followers")
      })
      .then (response => {
        const usernameArray= response.data.map(ele => {
          return ele.login
        })
        usernameArray.forEach(username => {
          axios.get(`https://api.github.com/users/${username}`)
            .then(response => {
              responseSet(response.data)
              return pushToList()
            })
            .catch(err => console.log(err)) 
        })
        return
      })
      .catch (err => console.log(err))
  }
  render(){
    return (
      <div className="App">
        <Header />
        <FollowerCards followersList={this.state.followersList}/>
        <Footer />
      </div>
    );
  }
  
}


export default App;
