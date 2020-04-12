import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";

// const authStatus = auth().currentUser;
let loggedInDisplay;
// console.log(authStatus);

auth().onAuthStateChanged((user) => {
  if (user) {
    loggedInDisplay = <li onClick={() => auth().signOut()}>Logout</li>;
  } else {
    loggedInDisplay = <li><Link to="login">Login</Link></li>;
  }
});

function Header() {
  return (
    <header>
      <Link to="/"><h1>Yale School of Art</h1></Link>
      <nav className="menu-wrap">
        <input type="checkbox" className="toggler"></input>
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul id="nav-list">
                <li>
                  <Link className="" to="/">
                    Home
                  </Link>
                </li>
                {loggedInDisplay}
                <li>
                  <Link className="active" to="/news">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <header class="showcase">
    <div class="container showcase-inner">
      <h1>Welcome</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae explicabo cum facere ratione veritatis.</p>
      <a href="#" class="btn">Read More</a>
    </div>
  </header> */}
    </header>
  );
}

export default Header;
// <header>
//   <nav>
//     <h1>Yale School of Art</h1>
//     <div id="hamburger" className="menu-active">
//       <span id="ham-1"></span>
//       <span id="ham-2"></span>
//       <span id="ham-3"></span>
//     </div>
//     <ul>
//       {loggedInDisplay}
//       <Link to="/news"><li>News</li></Link>
//       <Link to="/gallery"><li>Gallery</li></Link>
//       <Link to="/about"><li>About</li></Link>
//     </ul>
//   </nav>
//   {/* <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
//     <Link className="navbar-brand" to="/">Chatty</Link>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
//       {auth().currentUser
//         ? <div className="navbar-nav">
//           <Link className="nav-item nav-link mr-3" to="/chat">Profile</Link>
//           <button className="btn btn-primary mr-3" }>Logout</button>
//         </div>
//         : <div className="navbar-nav">
//           <Link className="nav-item nav-link mr-3" to="/login">Sign In</Link>
//           <Link className="nav-item nav-link mr-3" to="/signup">Sign Up</Link>
//         </div>}
//     </div>
//   </nav> */}
// </header>
