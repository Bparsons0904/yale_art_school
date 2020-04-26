// Login page

// Required imports
import React, { Component } from "react";
import { Link } from "react-router-dom";
// Signin methods from firebase
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";
// import watermark from "../assets/watermark4.jpg";
import video_backdrop_small from "../assets/cover_small.mp4";
import video_cover from "../assets/cover_photo.jpg";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: "",
      password: "",
    };

    // Bind to variables
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  // Update state with new value
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // Submit new email login request
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  // Use google sign is method
  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  // Use github signin method
  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  // After component is fully mounted
  componentDidMount() {
    // Set menu to active page
    let menuItems = document.getElementsByClassName("active");
    for (const element of menuItems) {
      element.classList.remove("active");
    }
    document.getElementById("menu-item-login").classList.add("active");
    document.getElementById('footer').style.display = "block";
  }

  componentWillUnmount() {
    document.getElementById('footer').style.display = "none";
  }

  render() {
    return (
      <section id="login">
        <figure id="cover">
          <video src={video_backdrop_small} autoPlay loop muted playsInline poster={video_cover}></video>
        </figure>
        <div className="container" >
        {/* <img src={watermark} alt="" id="watermark" /> */}
        <div className="card">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="inner-card">
              <h1>Student and Faculty Login</h1>
            </div>
            <div className="input-container">
              <div className="user-input">
                <i className="fa fa-envelope"></i>
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <div className="user-input">
              <i className="fa fa-lock"></i>
                <input
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  type="password"
                />
              </div>
            </div>

            <div>
              {this.state.error ? (
                <p className="text-danger">{this.state.error}</p>
              ) : null}
              <div className="btn-secondary" onClick={this.handleSubmit}>
                <i className="far fa-envelope"></i>Email Login
              </div>
            </div>
            {/* <p>You can also log in with any of these services</p> */}
            <div
              className="btn-secondary"
              type="button"
              onClick={this.googleSignIn}
            >
              <i className="fab fa-google"></i>Google Login
            </div>
            <div
              className="btn-secondary"
              type="button"
              onClick={this.githubSignIn}
            >
              <i className="fab fa-github"></i>GitHub Login
            </div>
            <hr />
            <p className="change-type">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
        </div>

      </section>
    );
  }
}
