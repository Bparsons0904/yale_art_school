import React, { Component } from "react";

import { Link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <section className="container" id="login">
        <div className="card">
          <form className="" autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="inner-card">
              <h1>Student and Faculty Login</h1>
            </div>
            <div className="input-container">
              <div className="email">
                <input
                  className=""
                  placeholder="Email"
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <div className="password">
                <input
                  className=""
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  type="password"
                />
              </div>
            </div>

            <div className="">
              {this.state.error ? (
                <p className="text-danger">{this.state.error}</p>
              ) : null}
              <div className="button btn-accent-light" type="submit">
                <i className="far fa-envelope"></i>Email Login
              </div>
            </div>
            {/* <p>You can also log in with any of these services</p> */}
            <div
              className="btn-secondary-light"
              type="button"
              onClick={this.googleSignIn}
            >
              <i className="fab fa-google"></i>Google Login
            </div>
            <div
              className="btn-secondary-light"
              type="button"
              onClick={this.githubSignIn}
            >
              <i className="fab fa-github"></i>GitHub Login
            </div>
            <hr />
            <p id="register">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </section>
    );
  }
}
