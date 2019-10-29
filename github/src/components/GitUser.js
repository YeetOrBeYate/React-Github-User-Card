import React from 'react';

class GitUser extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="user">
                <h1>{this.props.login}</h1>
                <img src={this.props.image}/>
                <p>{this.props.location}</p>
            </div>
        );
    }
}


export default GitUser;