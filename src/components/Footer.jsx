// import React from 'react';
//  compont

// function Footer() {
//   return (
//     <footer>
//       <div className="container">
//         <p>&copy; Yale School of Art <span id="year"></span>.</p>
//       </div>
//     </footer>
//   )
// }

// export default Footer;

import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.d = new Date();
    this.date = this.d.getFullYear();;
  }

  render() {

    return (
      <footer id="footer">
        <div className="footer-container">
          <div id="social">
            <a href="https://www.facebook.com/YaleSchoolofArt/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/yaleschoolofart/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
          <a id="contact" href="https://www.art.yale.edu/about/contact" target="_blank" rel="noopener noreferrer">Contacts</a>
          <p id="copyright">
            &copy; <span id="year">{this.date}</span>, Yale School of Art 
          </p>
        </div>
      </footer>
    );
  }
}
