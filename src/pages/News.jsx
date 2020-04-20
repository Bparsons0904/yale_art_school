// Main NewsPage

// Import required files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import video_backdrop_small from "../assets/cover_small.mp4";
import { gsap } from 'gsap';

// const cta = useRef(null);
// useEffect(() => {
//   gsap.to(
//     [cta.current],
//     0.5,
//     { color: "#23452a" }
//   );
// }, []);

export default class NewsPage extends Component {
  constructor(props) {
    super(props);
    // this.myElement = null;
    // const cta = React.useRef;
    this.headerRef = null;
    this.headerLoader = null;
    this.buttonRef = [];
    this.buttonLoader = null;
  }
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
    
    this.headerLoader = gsap.from(this.headerRef, 1, {y: -200});
    this.buttonLoader = gsap.to(this.buttonRef, {opacity:1,delay: 1});
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
        <Link className="cta btn-accent-dark-outline" to="/chat" ref={a => this.buttonRef[1] = a}>
          Chat
        </Link>
      );
    } else {
      loggedInButton = (
        <Link className="cta btn-accent-dark-outline" to="/login" ref={a => this.buttonRef[1] = a}>
          Login
        </Link>
      );
    }
    return (
      <section id="home">
        <figure id="cover">
          <video src={video_backdrop_small} autoPlay loop muted playsInline ></video>
        </figure>
        {/* <figure id="logo">
          <img src={logo} alt=""/>
        </figure> */}
        <div id="title">
          <h1  ref={h1 => this.headerRef = h1}>Yale School of Art</h1>
          <Link className="cta btn-primary-outline" to="/events" ref={a => this.buttonRef[0] = a}>
            <div>Events</div>
          </Link>
          {loggedInButton}
        </div>
      </section>
    );
  }
}
