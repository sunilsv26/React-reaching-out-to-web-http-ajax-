import React, { Component, Fragment } from "react";
import {Route,Link}from 'react-router-dom'
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
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to={{
                  pathname:'/new-post',
                }}>New-Post</Link>
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
