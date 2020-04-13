// Main homepage

// Import required files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import video_backdrop_small from "../assets/cover_small.mp4";

export default class HomePage extends Component {
  // After component loads
  componentDidMount() {
    // Remove navbar except hamburger
    document.getElementById('header-nav').classList.add("home-display");
    // Set active nav link
    let menuItems = document.getElementsByClassName("active");
    for (const element of menuItems) {
      element.classList.remove("active");
    }
    document.getElementById('menu-item-home').classList.add("active");
  };

  // Return navbar to standard
  componentWillUnmount() {
    document.getElementById('header-nav').classList.remove("home-display");
  }

  render() {
    // Set variable for auth status
    const { isAuth } = this.props;
    let loggedInButton;
    // Set user button based on authentication status
    if (isAuth) {
      loggedInButton = (
        <Link className="btn-accent-dark-outline" to="/chat">
          Chat
        </Link>
      );
    } else {
      loggedInButton = (
        <Link className="btn-accent-dark-outline" to="/login">
          Login
        </Link>
      );
    }
    return (
      <section id="home">
        <figure id="cover">
          <video src={video_backdrop_small} autoPlay muted loop></video>
        </figure>
        {/* <figure id="logo">
          <img src={logo} alt=""/>
        </figure> */}
        <div id="title">
          <h1>Yale School of Art</h1>
          <Link className="btn-primary-outline" to="/events">
            Events
          </Link>
          {loggedInButton}
        </div>
      </section>
    );
  }
}
