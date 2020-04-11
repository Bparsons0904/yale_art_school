import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";

// const authStatus = auth().currentUser;
let loggedInDisplay;
// console.log(authStatus);

async function authStatus() {
  if (auth().currentUser) {
    loggedInDisplay = <li onClick={() => auth().signOut()}>Logout</li>;
  } else {
    loggedInDisplay = <Link to="login">Login</Link>;
  }
}
authStatus();

function Header() {
  return (
    <header>
      <nav>
        <h1>Yale School of Art</h1>
        <ul>
          {loggedInDisplay}
          <Link to="/news">News</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
        </ul>
        <div id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
        <Link className="navbar-brand" to="/">Chatty</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          {auth().currentUser
            ? <div className="navbar-nav">
              <Link className="nav-item nav-link mr-3" to="/chat">Profile</Link>
              <button className="btn btn-primary mr-3" }>Logout</button>
            </div>
            : <div className="navbar-nav">
              <Link className="nav-item nav-link mr-3" to="/login">Sign In</Link>
              <Link className="nav-item nav-link mr-3" to="/signup">Sign Up</Link>
            </div>}
        </div>
      </nav> */}
    </header>
  );
}

export default Header;
