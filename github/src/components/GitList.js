import React from 'react';

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
                <p>Here are my github people</p>
                

                {this.state.list.map((person)=>(
                    <p>{person.login}</p>
                ))}
            </div>
        );
    }
}

export default GitList;