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
                <h1>GitHub Followers</h1>

                <div className="followers">
                    {this.state.list.map((person)=>(
                        <GitUser 
                        login={person.login}
                        image={person.avatar_url}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default GitList;