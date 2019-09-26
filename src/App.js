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
      mainUser: {
        name: 'Kyle Richardson',
        login: 'kyle-richardson'
      },
      followersList: [],
      searchValue: ''
    }
  }

  mainAxios = () => {
    axios
    .get(`https://api.github.com/users/${this.state.mainUser.login}`)
    .then (response => {
      const data = response.data
      this.setUser(data)
      this.setState(prev => ({
        ...prev,
        mainUser: {
          name: data.name,
          login: data.login
        },
        followersList: []
      }))
    })
    .then(()=>{
      this.pushToList()
      return axios.get(`https://api.github.com/users/${this.state.mainUser.login}/followers`)
    })
    .then (response => {
      const usernameArray= response.data.map(ele => {
        return ele.login
      })
      usernameArray.forEach(username => {
        axios.get(`https://api.github.com/users/${username}`)
          .then(response => {
            this.setUser(response.data)
            return this.pushToList()
          })
          .catch(err => console.log(err)) 
      })
      return
    })
    .catch (err => console.log(err))
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.setState({
        mainUser: {
            login: this.state.searchValue
        }
    }, ()=> this.mainAxios())
    
  }
  setUser = (data) => {
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
  pushToList = () => {
    this.setState(prev => ({
      followersList: [...prev.followersList, this.state.user]
    }))
  }

  componentDidMount = () => {

  this.setState(() => ({
    mainUser: {
      name: 'Kyle Richardson',
      login: 'kyle-richardson'
    }
  }), 
  ()=> {this.mainAxios()}
  )
  
  }

  componentDidUpdate = () => {
    // this.mainAxios()
  }

  render(){
    return (
      <div className="App">
        <Header 
          mainUser= {this.state.mainUser} 
          searchValue = {this.state.searchValue} 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}/>
        <FollowerCards followersList={this.state.followersList}/>
        <Footer />
      </div>
    );
  }
  
}


export default App;
