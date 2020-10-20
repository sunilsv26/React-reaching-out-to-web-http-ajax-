import React, { Component, Fragment } from "react";
import axios from "../../axios";
import "./Blog.css";
import Posts from "../Posts/Posts";

class Blog extends Component {
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

  postDeleteHandler = () => {
    this.setState({ selectedId: null });
  };
  render() {
    return (
      <Fragment>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">New-Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Posts />
      </Fragment>
    );
  }
}

export default Blog;
