import React from 'react';
import GitUser from "./GitUser";

class GitList extends React.Component{

        state ={
            list:[]
        }
    

    componentDidUpdate(prevProps){
        if(this.props.data !== prevProps.data){
            this.setState({
                list:this.props.data
            })
        }
    }

    render(){
        
        return(
            <div>
                <h1>Here are my github people</h1>

                <div className="followers">
                    {this.state.list.map((person)=>(
                        <GitUser 
                        login={person.login}
                        image={person.avatar_url}
                        location={person.location}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default GitList;