import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.min.css";
// import backdrop from "../assets/yale_gallery_backdrop.jpg";
// import logo from "../assets/Yale_School_of_Art.png";
import video_backdrop_small from "../assets/cover_small.mp4"

export default class HomePage extends Component {
  render() {
    return (
      <section id="home">
        <figure id="cover">
          {/* <img src={backdrop} alt="" /> */}
          <video src={video_backdrop_small} autoPlay muted loop></video>
        </figure>
        {/* <figure id="logo">
          <img src={logo} alt=""/>
        </figure> */}
        <div id="title">
          <h1>Yale School of Art</h1>
          <Link className="btn-primary" to="/events">Events</Link>
          <Link className="btn-accent-light" to="/login">Login</Link>
        </div>
      </section>
      // <div className="home">
      //   <section>
      //     <div className="jumbotron jumbotron-fluid py-5">
      //       <div className="container text-center py-5">
      //         <h1 className="display-4">Welcome to Chatty</h1>
      //         <p className="lead">A great place to share your thoughts with friends</p>
      //         <div className="mt-4">
      //           <Link className="btn btn-primary px-5 mr-3" to="/signup">Create New Account</Link>
      //           <Link className="btn px-5" to="/login">Login to Your Account</Link>
      //         </div>
      //       </div>
      //     </div>
      //   </section>
      // </div>
    );
  }
}
