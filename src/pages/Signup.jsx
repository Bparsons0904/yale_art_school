// Registration page

// Import required files
import React, { Component } from "react";
import { Link } from "react-router-dom";
// Firebase registration methods
import { signup, signInWithGoogle, signInWithGitHub } from "../helpers/auth";
import watermark from "../assets/watermark4.jpg";

export default class SignUp extends Component {
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

  // On change update state with new value
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // On submit, attempt to register based on email
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  // Register with google
  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  // Register with github
  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <section id="register">
        <div className="container">
        <img src={watermark} alt="" id="watermark" />
        <div className="card card-shadow">
          <form onSubmit={this.handleSubmit}>
            <div className="inner-card">
              <h1>User Registration</h1>
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
              <i className="far fa-envelope"></i>Email Register
              </div>
            </div>
            <div
            className="btn btn-secondary"
              onClick={this.googleSignIn}
            >
              <i className="fab fa-google"></i>Google Register
            </div>
            <div
              className="btn btn-secondary"
              type="button"
              onClick={this.githubSignIn}
            >
              <i className="fab fa-github"></i>Github Register
            </div>
            <hr></hr>
            <p className="change-type">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
        </div>
        
      </section>
    );
  }
}
