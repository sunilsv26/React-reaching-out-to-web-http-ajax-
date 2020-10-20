import React, { Component, Fragment } from "react";
import {Route}from 'react-router-dom'
import "./Blog.css";
import Posts from "../Posts/Posts";
import NewPost from './NewPost/NewPost'

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
                <a href="new-post">New-Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Route path='/' exact component={Posts}/>
        <Route path='/new-post' exact component={NewPost}/>
      </Fragment>
    );
  }
}

export default Blog;
