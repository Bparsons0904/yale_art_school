import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";
import logo from "../assets/Yale_School_of_Art.png";

import "../services/services.js";    
import { menuSelection } from "../services/services.js";
export default class Header extends Component {
  render() {
    const { isAuth } = this.props;
    let loggedInDisplay;
    if (isAuth) {
      loggedInDisplay = (
        <div>
          <li> <Link to="/" className="menu-item" onClick={() => auth().signOut()}>
            Logout </Link>
          </li>
          <li>
            <Link
              className="menu-item"
              to="/chat"
              id="menu-item-chat"
                      onClick={menuSelection("menu-item-chat")}
            >
              Chat
            </Link>
          </li>
        </div>
      );
    } else {
      loggedInDisplay = (
        <li>
          <Link className="menu-item" to="login" id="menu-item-login"
                      onClick={menuSelection("menu-item-home")}>
            Login
          </Link>
        </li>
      );
    };

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
                    onClick={menuSelection("menu-item-home")}
                    data-content="Home"
                  >
                    Home
                  </Link>
                </li>
                {loggedInDisplay}
                <li>
                  <Link
                    className="menu-item"
                    to="/news" 
                    id="menu-item-news"
                    onClick={menuSelection("menu-item-news")}
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link className="menu-item" to="/gallery" id="menu-item-gallery"
                    onClick={menuSelection("menu-item-gallery")}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link className="menu-item" to="/about" id="menu-item-about"
                    onClick={menuSelection("menu-item-about")}>
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
    );
  }
}

// const authStatus = auth().currentUser;
// let loggedInDisplay;
// console.log(authStatus);

// auth().onAuthStateChanged((user) => {
  
//   if (user) {
//     loggedInDisplay = (
//       <div>
//         <li> <Link to="/" className="menu-item" onClick={() => auth().signOut().then(() => {setTimeout(() => {
//       document.getElementById('menu-item-home').classList.add("active");toggleCheckbox();
//     }, 300);})}>
//           Logout </Link>
//         </li>
//         <li>
//           <Link
//             className="menu-item"
//             to="/chat"
//             id="menu-item-chat"
//                     onClick={menuSelection("menu-item-chat")}
//           >
//             Chat
//           </Link>
//         </li>
//       </div>
//     );
//   } else {
//     loggedInDisplay = (
//       <li>
//         <Link className="menu-item" to="login" id="menu-item-login"
//                     onClick={menuSelection("menu-item-home")}>
//           Login
//         </Link>
//       </li>
//     );
//   }
// });




// function Header() {
  
//   return (
//     <header>
//       <div id="title-group">
//         <img src={logo} alt="" />
//         <Link to="/">
//           <h1>Yale School of Art</h1>
//         </Link>
//       </div>

//       <nav className="menu-wrap">
//         <input type="checkbox" className="toggler" id="toggler"></input>
//         <div className="hamburger">
//           <div></div>
//         </div>
//         <div className="menu">
//           <div>
//             <div>
//               <ul id="nav-list">
//                 <li>
//                   <Link
//                     className="menu-item active"
//                     to="/"
//                     id="menu-item-home"
//                     onClick={menuSelection("menu-item-home")}
//                     data-content="Home"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 {loggedInDisplay}
//                 <li>
//                   <Link
//                     className="menu-item"
//                     to="/news" 
//                     id="menu-item-news"
//                     onClick={menuSelection("menu-item-news")}
//                   >
//                     News
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="menu-item" to="/gallery">
//                     Gallery
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="menu-item" to="/about">
//                     About
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//       {/* <header class="showcase">
//     <div class="container showcase-inner">
//       <h1>Welcome</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae explicabo cum facere ratione veritatis.</p>
//       <a href="#" class="btn">Read More</a>
//     </div>
//   </header> */}
//     </header>
//   );
// }

// export default Header;
// // <header>
// //   <nav>
// //     <h1>Yale School of Art</h1>
// //     <div id="hamburger" className="menu-active">
// //       <span id="ham-1"></span>
// //       <span id="ham-2"></span>
// //       <span id="ham-3"></span>
// //     </div>
// //     <ul>
// //       {loggedInDisplay}
// //       <Link to="/news"><li>News</li></Link>
// //       <Link to="/gallery"><li>Gallery</li></Link>
// //       <Link to="/about"><li>About</li></Link>
// //     </ul>
// //   </nav>
// //   {/* <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
// //     <Link className="navbar-brand" to="/">Chatty</Link>
// //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
// //       <span className="navbar-toggler-icon"></span>
// //     </button>
// //     <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
// //       {auth().currentUser
// //         ? <div className="navbar-nav">
// //           <Link className="nav-item nav-link mr-3" to="/chat">Profile</Link>
// //           <button className="btn btn-primary mr-3" }>Logout</button>
// //         </div>
// //         : <div className="navbar-nav">
// //           <Link className="nav-item nav-link mr-3" to="/login">Sign In</Link>
// //           <Link className="nav-item nav-link mr-3" to="/signup">Sign Up</Link>
// //         </div>}
// //     </div>
// //   </nav> */}
// // </header>
