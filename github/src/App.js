import React from 'react';
import './App.css';
import GitList from "./components/GitList";
import GitUser from "./components/GitUser";
import axios from "axios";

class App extends React.Component {
  
  
    state={
      host:{},
      followers:'',
      data:[]
    }
  

  componentDidMount(){
    axios
      .get("https://api.github.com/users/YeetOrBeYate")
      .then((res)=>{
        const host = res.data;
        this.setState({
          host: {
            image:host.avatar_url,
            login:host.login,
            location:host.location
          },
          followers:host.followers_url
        })
        console.log("App",res.data)
        axios
        .get(`${this.state.followers}`)
        .then((res)=>{
          console.log("this is followers", res)
        })
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  
   
  render(){
    return (
      <div className="App">
        Yeet
        <GitUser 
        login={this.state.host.login}
        image={this.state.host.image}
        location={this.state.host.location}/>
        {/* <GitList data={this.state.data}/> */}
      </div>
    );
  }
   
}

export default App;
