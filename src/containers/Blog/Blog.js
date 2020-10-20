import React, { Component,Fragment} from "react";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    Posts: [],
    selectedId: null,
    title: null,
    content: null,
    err: false,
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

  postDeleteHandler = () => {
    this.setState({ selectedId: null });
  };
  render() {
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
        <div>
          <section className="Posts">{posts}</section>

          <section>
            <FullPost id={this.state.selectedId} />
          </section>

          <section>
            <NewPost />
          </section>
        </div>
      </Fragment>
    );
  }
}

export default Blog;
