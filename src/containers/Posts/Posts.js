import React,{Component} from 'react';
import Post from '../../../src/components/Post/Post'
import './Posts.css';
import axios from '../../axios'

class Posts extends Component{
    state = {
        Posts: [],
    }

    componentDidMount() {
        axios
          .get("/posts")
          .then((response) => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map((post) => {
              return { ...post, author: "Max" };
            });
            return this.setState({ Posts: updatedPosts });
          })
          .catch((error) => this.setState({ err: true }));
    }
    
    selectedPostHandler = (id) => {
        this.setState({ selectedId: id });
      };
    render(){
        let posts = <p style={{ textAlign: "center" }}>Somrthing Went Wrong</p>;
        if (!this.state.err) {
          posts = this.state.Posts.map((post) => {
            return (
              <Post
                title={post.title}
                key={post.id}
                author={post.author}
                clicked={() => this.selectedPostHandler(post.id)}
              />
            );
          });
        }
       
        return(
            <section className="Posts">{posts}</section>
        )
    }
}

export default Posts