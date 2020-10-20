import React, { Component } from 'react';
import axios from 'axios'
import './FullPost.css';

class FullPost extends Component {
    state={
        loadedData:null
    }
    componentDidMount=()=>{
        if(this.props.match.params.id){
            if(!this.state.loadedData ||(this.state.loadedData && this.state.loadedData.id !== this.props.id)){
                axios.get('/posts/'+this.props.match.params.id)
                .then(response=>{return this.setState({loadedData:response.data})})
            }
          
        }
        
    }

    postDeleteHAndler=()=>{
        axios.delete('/posts/'+this.props.id)
        .then(response=>console.log(response))
    }
    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.state.loadedData){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedData.title}</h1>
                    <p>{this.state.loadedData.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.postDeleteHAndler}>Delete</button>
                    </div>
                </div>
    
            );
        }
       
        return post;
    }
}

export default FullPost;