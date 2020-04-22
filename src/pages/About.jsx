// About page

// Import required files
import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { gsap } from "gsap";
import watermark from "../assets/watermark4.jpg";


export default class AboutPage extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // Set menu to active page
    let menuItems = document.getElementsByClassName("active");
    for (const element of menuItems) {
      element.classList.remove("active");
    }
    document.getElementById("menu-item-about").classList.add("active");  

  }

  render() {
    // Set variable for auth status

    return (
      <section id="about">
        <img src={watermark} alt="" id="watermark" />
      </section>
    );
  }
}