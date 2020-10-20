import React, { Component, Fragment } from "react";
import "./Blog.css";
import Posts from "../Posts/Posts";

class Blog extends Component {
  

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
