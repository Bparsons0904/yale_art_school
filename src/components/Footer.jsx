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

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.date = null;
  }

  componentWillMount() {
    const d = new Date();
    this.date = d.getFullYear();
  }

  render() {
    return (
      <footer>
        <div className="footer-container">
          <div id="social">
            <a href="https://www.facebook.com/YaleSchoolofArt/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/yaleschoolofart/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
          </div>
          <a id="contact" href="https://www.art.yale.edu/about/contact" target="_blank" rel="noopener noreferrer">Contact List</a>
          <p id="copyright">
            &copy; Yale School of Art <span id="year">{this.date}</span>.
          </p>
        </div>
      </footer>
    );
  }
}
