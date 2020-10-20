import React, { Component, Fragment } from "react";
import {Route,NavLink}from 'react-router-dom'
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
                <NavLink to='/' exact
                activeStyle={{color:'green'}}>Home</NavLink>
              </li>
              <li>
                <NavLink to={{
                  pathname:'/new-post',
                }}>New-Post</NavLink>
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
