import React from 'react';
import './App.css';
import axios from "axios"

import GitHubCalendar from 'react-github-calendar'
import FollowerCards from "./FollowerCards"
import Header from "./Header"
import Footer from "./Footer"

class App extends React.Component {
  _isMounted=false;

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
      if (this._isMounted) {
        const data = response.data
        this.setState(prev => ({
          mainUser: {
            name: data.name,
            login: data.login
          },
          followersList: []
        }))
        this.setUser(data)
      }
    })

    .then(()=>{
      if (this._isMounted) {
      this.pushToList()
      return axios.get(`https://api.github.com/users/${this.state.mainUser.login}/followers`)
      }
    })
    .then (response => {
      if (this._isMounted) {
      response.data.forEach(ele=> {
        this.setUser(ele)
        this.pushToList()
      })
    }
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
  handleSwitch = person => {
    const {name, login} = person
    this.setState({
      mainUser: {
        name: name,
        login: login
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
  pushToList = (user=this.state.user) => {
    this.setState(prev => ({
      followersList: [...prev.followersList, user]
    }))
  }

  componentDidMount = () => {
    this._isMounted=true;
    this.setState(() => ({
      mainUser: {
        name: 'Kyle Richardson',
        login: 'kyle-richardson'
      }
    }), 
    ()=> {this.mainAxios()}
    )
  
  }
  componentWillUnmount = () => {
    this._isMounted=false;
  }
  showCalendar = ()=> {
   return 
  }

  render(){
    return (
      <div className="App">
        <Header 
          mainUser= {this.state.mainUser} 
          searchValue = {this.state.searchValue} 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}/>
        <FollowerCards 
          followersList={this.state.followersList}
          mainUser= {this.state.mainUser}
          handleSwitch={this.handleSwitch}/>
        <Footer />
      </div>
    );
  }
  
}


export default App;
