// Header component including navbar

// Import required files
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";
import logo from "../assets/Yale_School_of_Art.png";

// Toggle close menu
function toggleCheckbox() {
  return () => {
    let checkbox = document.getElementById("toggler");
    checkbox.checked = !checkbox.checked;
  };
}

export default class Header extends Component {
  render() {
    // Set if user is logged in
    const { isAuth } = this.props;
    let loggedInDisplay;
    let loggedOutDisplay;
    // If logged in, display logout and user restricted links
    // otherwise display login menu
    if (isAuth) {
      loggedOutDisplay = (
        <li>
          {/* Logout of authentication and close window */}
          <Link
            to="/"
            className="menu-item"
            onClick={() => auth().signOut().then(toggleCheckbox())}
          >
            Logout
          </Link>
        </li>
      );
    } else {
      loggedInDisplay = (
        <li>
          <Link
            className="menu-item"
            to="login"
            id="menu-item-login"
            onClick={toggleCheckbox()}
          >
            Login
          </Link>
        </li>
      );
    }

    return (
      <header id="header-nav">
        <div id="title-group">
          <img src={logo} alt="" />
          <Link to="/">
            <h1>Yale School of Art</h1>
          </Link>
        </div>
        <nav className="menu-wrap">
          <input type="checkbox" className="toggler" id="toggler"></input>
          <div className="hamburger">
            <div></div>
          </div>
          <div className="menu">
            <div>
              <div>
                <ul id="nav-list">
                  <li>
                    <Link
                      className="menu-item active"
                      to="/"
                      id="menu-item-home"
                      onClick={toggleCheckbox()}
                      data-content="Home"
                    >
                      Home
                    </Link>
                  </li>
                  {loggedInDisplay}
                  <li>
                    <Link
                      className="menu-item"
                      to="/events"
                      id="menu-item-events"
                      onClick={toggleCheckbox()}
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="menu-item"
                      to="/gallery"
                      id="menu-item-gallery"
                      onClick={toggleCheckbox()}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="menu-item"
                      to="/news"
                      id="menu-item-news"
                      onClick={toggleCheckbox()}
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="menu-item"
                      to="/chat"
                      id="menu-item-chat"
                      onClick={toggleCheckbox()}
                    >
                      Chat
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="menu-item"
                      to="/about"
                      id="menu-item-about"
                      onClick={toggleCheckbox()}
                    >
                      About
                    </Link>
                  </li>
                  {loggedOutDisplay}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
