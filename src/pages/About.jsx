// About page

// Import required files
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { gsap } from "gsap";
import watermark from "../assets/watermark4.jpg";
import logo from "../assets/Yale_School_of_Art.png";
import building from "../assets/building.jpg";
import building2 from "../assets/building2.jpg";
import building3 from "../assets/building3.jpg";

export default class AboutPage extends Component {
  constructor(props) {
    super(props);
    // this.myElement = null;
    // const cta = React.useRef;
    this.imgRef = null;
    this.textRef = null;
    this.img2Ref = null;
    this.buttonRef = [];
  }

  componentDidMount() {
    // Set menu to active page
    let menuItems = document.getElementsByClassName("active");
    for (const element of menuItems) {
      element.classList.remove("active");
    }
    document.getElementById("menu-item-about").classList.add("active");

    let tl = gsap.timeline();
    tl.to(this.imgRef, { scale: 1 })
    .to(this.textRef, { y: 0 })
    .to(this.img2Ref, { y: 0 });
    // .to(this.buttonRef, { y: 0, opacity: 1, stagger: 0.2 });

    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.set(entry.target, { y: 200, opacity: 0 });
            gsap.to(entry.target, { y: 0, opacity: 1, duration: 1 });
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px 100px 0px" }
    );
    this.scrollEvents = document.querySelectorAll(".btn-about");
    this.scrollEvents.forEach((card) => {
      observer.observe(card);
    });
  }

  render() {
    // Set variable for auth status

    return (
      <section id="about">
        <img src={watermark} alt="" id="watermark" />
        <div id="welcome-container" className="container">
          <img src={logo} alt="" ref={(img) => (this.imgRef = img)} />
          <h2 ref={(h2) => (this.textRef = h2)}>
            THE YALE SCHOOL OF ART IS A GRADUATE SCHOOL THAT CONFERS MASTER OF
            FINE ARTS DEGREES IN GRAPHIC DESIGN, PAINTING/PRINTMAKING,
            PHOTOGRAPHY, AND SCULPTURE
          </h2>
        </div>
        <div className="img-container" id="img-anim" ref={(div) => (this.img2Ref = div)}>
          <img src={building} alt="" />
        </div>
        <div className="links">
          <a
            href="https://www.art.yale.edu/about/mission-statement"
            className="btn-about"
            target="_blank"
            rel="noopener noreferrer"
            ref={(a) => (this.buttonRef[0] = a)}
          >
            Mission Statement
          </a>

          <a
            href="https://www.art.yale.edu/about/study-areas"
            className="btn-about"
            target="_blank"
            rel="noopener noreferrer"
            ref={(a) => (this.buttonRef[1] = a)}
          >
            Study Areas
          </a>
          <a
            href="https://www.art.yale.edu/about/people"
            className="btn-about"
            target="_blank"
            rel="noopener noreferrer"
            ref={(a) => (this.buttonRef[2] = a)}
          >
            People
          </a>
          <a
            href="https://www.art.yale.edu/about/resources"
            className="btn-about"
            target="_blank"
            rel="noopener noreferrer"
            ref={(a) => (this.buttonRef[3] = a)}
          >
            Resources
          </a>
          <a
            href="https://www.art.yale.edu/about/visiting"
            className="btn-about"
            target="_blank"
            rel="noopener noreferrer"
            ref={(a) => (this.buttonRef[4] = a)}
          >
            Visiting
          </a>
          <a
            href="https://www.art.yale.edu/about/facilities"
            className="btn-about"
            target="_blank"
            rel="noopener noreferrer"
            ref={(a) => (this.buttonRef[5] = a)}
          >
            Facilities
          </a>
          <a
            href="https://www.art.yale.edu/about/contact"
            className="btn-about"
            target="_blank"
            rel="noopener noreferrer"
            ref={(a) => (this.buttonRef[6] = a)}
          >
            Contact
          </a>
          <a
            href="https://www.art.yale.edu/about/history"
            className="btn-about"
            target="_blank"
            rel="noopener noreferrer"
            ref={(a) => (this.buttonRef[7] = a)}
          >
            History
          </a>
        </div>
        <div className="img-container">
          <img src={building2} alt="" />
        </div>
        <div className="card">
          <p>
            Artists and designers of unusual promise and strong motivation are
            provided an educational context in which they can explore the
            potential of their own talents in the midst of an intense critical
            dialogue. This dialogue is generated by their peers, by
            distinguished visitors, and by a faculty comprised of professional
            artists of acknowledged accomplishment.
          </p>
          <p>
            The graduate student’s primary educational experience at Yale is
            centered on the student’s own studio activity. Supporting this
            enterprise are the experience, knowledge, and skills gained from
            rigorous, structured courses such as drawing, filmmaking, the
            relativity of color, and the rich academic offerings found
            throughout Yale. Each student is routinely exposed to many aesthetic
            positions through encounters with faculty members and visitors. The
            School is devoted not only to the refinement of visual skills, but
            also to the cultivation of the mind. Students must bring creative
            force and imagination to their own development, for these qualities
            cannot be taught—they can only be stimulated and appreciated.
          </p>
          <p>
            The School of Art offers an undergraduate art major for students in
            Yale College (see the bulletin Yale College Programs of Study). In
            addition, the School’s courses are open to students in the Graduate
            School of Arts and Sciences and other professional schools of the
            University, and School of Art students may enroll in elective
            courses in the Graduate School and other professional schools as
            well as in the College with permission.
          </p>
        </div>
        <div className="img-container">
          <img src={building3} alt="" />
        </div>
      </section>
    );
  }
}
