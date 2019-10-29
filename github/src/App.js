import React from 'react';
import './App.css';
import GitList from "./components/GitList";
import axios from "axios";

class App extends React.Component {
  
  
    state={
      data:[]
    }
  

  componentDidMount(){
    axios
      .get("https://api.github.com/users/YeetOrBeYate/followers")
      .then((res)=>{
        this.setState({
          data: res.data
        })
        console.log("App",res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  
   
  render(){
    return (
      <div className="App">
        Yeet
        <GitList data={this.state.data}/>
      </div>
    );
  }
   
}

export default App;
