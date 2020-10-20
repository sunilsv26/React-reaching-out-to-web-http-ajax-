import React, { Component } from "react";
import Post from "../../../src/components/Post/Post";
import "./Posts.css";
import axios from "../../axios";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    Posts: [],
  };

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
  render() {
    let posts = <p style={{ textAlign: "center" }}>Somrthing Went Wrong</p>;
    if (!this.state.err) {
      posts = this.state.Posts.map((post) => {
        return (
          <Link
            to={"/posts/" + post.id}
            style={{ textDecoration: "none" }}
            key={post.id}
          >
            <Post
              title={post.title}
              author={post.author}
              clicked={() => this.selectedPostHandler(post.id)}
            />
          </Link>
        );
      });
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
