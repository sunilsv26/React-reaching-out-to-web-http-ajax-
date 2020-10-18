import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    Posts: [],
    selectedId:null,
    title:null,
    content:null,
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const posts = response.data.slice(0, 6);
      const updatedPosts = posts.map((post) => {
        return { ...post, author: "Max" };
      });
      return this.setState({ Posts: updatedPosts});
    });
  }

  selectedPostHandler=(id,title,body)=>{
    this.setState({selectedId:id,title:title,content:body})
  }
  render() {
    const posts = this.state.Posts.map((post) => {
      return <Post title={post.title} 
      key={post.id} 
      author={post.author}
      clicked={()=>this.selectedPostHandler(post.id,post.title,post.body)}/>;
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedId} 
          title={this.state.title}
          content={this.state.content}/>
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
