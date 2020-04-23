// Gallery page

// Import required files
import React, { Component } from "react";
import { gsap, TimelineLite } from "gsap";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";

import banner from "../assets/banner.gif";
// import placeholder from "../assets/person-placeholder.jpg";
import kbarad from "../assets/kbarad.jpg";
import mkuzma from "../assets/mkuzma.jpg";
import mthomas from "../assets/mthomas.jpeg";
import psepuya from "../assets/psepuya.jpg";
import watermark from "../assets/watermark4.jpg";

function extendDetails(e) {
  e.target.nextSibling.style.display = "block";
  e.target.nextSibling.nextSibling.style.display = "block";
  // e.target.nextSibling.style.height = "100%";
  e.target.style.display = "none";

  gsap.to(e.target.nextSibling, 0, { height: "100%" });
}

function hideDetails(e) {
  e.target.previousSibling.style.display = "none";
  e.target.style.display = "none";
  e.target.previousSibling.previousSibling.style.display = "block";
  e.target.parentElement.scrollIntoView();
}

export default class GalleryPage extends Component {
  constructor(props) {
    super(props);
    // this.headerRef = null;
    // this.headerLoader = null;
    this.scrollEvents = [];
    this.eventElements = [];
    this.eventElementsBefore = [];
    this.eventElementsAfter = [];
    this.tl = new TimelineLite({ delay: 0.3 });
    this.tlPs = new TimelineLite({ delay: 0.5 });
    this.cardsTween = null;
    // gsap.registerPlugin(CSSRulePlugin);
  }

  componentDidMount() {
    // Set menu to active page
    let menuItems = document.getElementsByClassName("active");
    for (const element of menuItems) {
      element.classList.remove("active");
    }
    document.getElementById("menu-item-events").classList.add("active");

    let extendedDetails = document.getElementsByClassName("extend-button");
    for (let index = 0; index < extendedDetails.length; index++) {
      extendedDetails[index].addEventListener("click", function (e) {
        extendDetails(e);
      });
    }
    let hiddenDetails = document.getElementsByClassName("hide-button");
    for (let index = 0; index < hiddenDetails.length; index++) {
      hiddenDetails[index].addEventListener("click", function (e) {
        hideDetails(e);
      });
    }

    // this.eventElementsBefore = CSSRulePlugin.getRule(".event-card:before");
    // this.eventElementsAfter = CSSRulePlugin.getRule(".event-card:after");
    // this.tlPs.staggerTo(
    //   this.eventElementsBefore,
    //   0.5,
    //   {
    //     cssRule: { autoAlpha: 1 },
    //   },
    //   0.3
    // );
    // this.tlPs.staggerTo(
    //   this.eventElementsAfter,
    //   0.5,
    //   {
    //     cssRule: { autoAlpha: 1 },
    //   },
    //   0.3
    // );
    this.tl.staggerFrom(this.eventElements, 0.5, { autoAlpha: 0, y: 50 }, 0.3);
    // gsap.from(entry.target, 1, { y: -200 });
    let observer = new IntersectionObserver((entries, observer) => { 
      entries.forEach(entry => {
      if(entry.isIntersecting){
          gsap.fromTo(entry.target, { y: 300}, {y: 0,duration: 1, delay: .5});
          observer.unobserve(entry.target);
      }
      });
  }, {rootMargin: "0px 0px 350px 0px"});
    this.scrollEvents = document.querySelectorAll(".scroll-event");
    this.scrollEvents.forEach((card) => {
      observer.observe(card);
    });
  }

  render() {
    return (
      <section id="events">
        <img src={watermark} alt="" id="watermark" />
        <div className="container">
          <img src={banner} alt="150th Banner" id="banner" />

          <div
            className="event-card full-card"
            ref={(div) => (this.eventElements[0] = div)}
          >
            <h2>COVID-19 Update</h2>
            <hr />
            <h4 className="event-primary">
              Following Yale University guidance in response to the spread of
              COVID-19, the public events comprising the School of Art’s 150th
              Spring Lecture Series have been postponed.
            </h4>
            <p className="event-info">
              Information regarding rescheduling will be posted here as soon as
              it becomes available.
            </p>
            <p className="expanded-details"></p>
          </div>

          <div
            className="event-card half-card"
            ref={(div) => (this.eventElements[1] = div)}
          >
            <h2>ART 150</h2>
            <hr />
            <h4 className="event-primary">
              In celebration of the Yale School of Art’s 150th year, the School
              is hosting a series of public talks and engagements, as well as
              community events open to students and alumni.
            </h4>
            <p className="event-info"></p>
            <p className="expanded-details"></p>
          </div>

          <div
            className="event-card full-card"
            ref={(div) => (this.eventElements[2] = div)}
          >
            <h2>
              <span>Postponed</span>
              <br />
              Marta Kuzma
            </h2>
            <hr />
            <div className="event-details">
              <img src={kbarad} alt="" />
              <p className="date">Thursday, March 26, 2020</p>
              <p className="time">6:30pm</p>
              <p className="address">EIK, 32 Edgewood Avenue</p>
            </div>
            <h4 className="event-primary">
              Following Yale University guidance in response to the spread of
              COVID-19, the public events comprising the School of Art’s 150th
              Spring Lecture Series have been postponed. This lecture has been
              postponed to Fall 2020.
            </h4>
            <p className="event-info">
              Hayden Distinguished Fellow Karen Barad is Professor of Feminist
              Studies, Philosophy, and History of Consciousness at the
              University of California at Santa Cruz and also has an affiliation
              in Critical Race &amp; Ethnic Studies. Barad’s Ph.D. is in
              theoretical particle physics and quantum field theory.
            </p>
            <div className="extend-button">
              Read More<i className="fas fa-angle-double-right"></i>
            </div>
            <p className="expanded-details">
              Barad held a tenured appointment in a physics department before
              moving into more interdisciplinary spaces. Barad is the author of
              Meeting the Universe Halfway: Quantum Physics and the Entanglement
              of Matter and Meaning &#40;Duke University Press, 2007&#41; and
              numerous articles in the fields of physics, philosophy, science
              studies, poststructuralist theory, and feminist theory. Barad’s
              research has been supported by the National Science Foundation,
              the Ford Foundation, the Hughes Foundation, the Irvine Foundation,
              the Mellon Foundation, and the National Endowment for the
              Humanities. Barad has served as both the Director and Co-Director
              of the Science &amp; Justice Graduate Training Program at UCSC,
              which they helped found.
              <br />
              <br />
              The Hayden Distinguished Fellowship program at the Yale School of
              Art is made possible through the Hayden Fund for Art and Ideas,
              and brings internationally renowned artists and cultural producers
              to the School of Art to work with students as teachers, mentors,
              and critics. Former Hayden Distinguished Fellows have included
              artists Carol Bove, Richard Hawkins, Andrea Fraser, and Hito
              Steyerl, and philosopher, art theorist, and critic Peter Osborne.
            </p>
            <div className="hide-button">
              <i className="fas fa-angle-double-left"></i>Hide Details
            </div>
          </div>

          <div
            className="event-card full-card scroll-event"
            ref={(div) => (this.eventElements[3] = div)}
          >
            <h2>
              <span>Postponed</span>
              <br /> PAUL MPAGI SEPUYA: AN ARTIST TALK
            </h2>
            <div className="event-details">
              <img src={psepuya} alt="" />
              <p className="date">Monday, April 13, 2020</p>
              <p className="time">6pm</p>
              <p className="address">EIK, 32 Edgewood Ave</p>
            </div>
            <h4 className="event-primary">
              Following Yale University guidance in response to the spread of
              COVID-19, the public events comprising the School of Art’s 150th
              Spring Lecture Series have been postponed.
            </h4>
            <p className="event-info">
              Paul Mpagi Sepuya will provide an overview of his recent work and
              practice, as produced for his March 2020 exhibition at Vielmetter
              Los Angeles. Sepuya lives and works in Los Angeles, where he
              received an MFA in photography at the University of California,
              Los Angeles in 2016. 
            </p>
            <div className="extend-button">
              Read More<i className="fas fa-angle-double-right"></i>
            </div>
            <p className="expanded-details">
            From 2000 through 2014 Sepuya resided in New
              York City, receiving a BFA from New York University’s Tisch School
              of the Arts in 2004. Sepuya became known for his zine series SHOOT
              &#40;2005–2007&#41; and first monograph, Beloved Object &amp;
              Amorous Subject, Revisited &#40;2008&#41;, along with
              contributions and features in BUTT Magazine, and participation and
              collaborations in the re-emergence of queer zine culture of the
              2000s. He went on to participate in Artist-in-Residence programs
              at the Lower Manhattan Cultural Council, the Center for
              Photography at Woodstock, The Studio Museum in Harlem, and the
              Fire Island Artist Residency.
              <br/><br/>
              Sepuya’s work is in the permanent collections of the Museum of
              Modern Art, the Whitney Museum of American Art, the Guggenheim
              Museum, the Studio Museum in Harlem, the International Center for
              Photography, the Cleveland Museum of Art, the Milwaukee Art
              Museum, and the Carnegie Museum, among others. Sepuya was recently
              featured in Being: New Photography 2018 at the Museum of Modern
              Art and Trigger at the New Museum in New York &#40;2018&#41;. His
              first museum survey of work from 2006 through 2018 was hosted by
              the Contemporary Art Museum St. Louis from May through August
              2019. Sepuya’s work has been covered and published in ARTFORUM,
              Aperture, The New Yorker, The New York Times, Art Review, Frieze,
              Art in America, Monocle, Osmos, and The Nation, and he is a
              recipient of the 2017 Rema Hort Mann Foundation’s grant for Los
              Angeles artists.
            </p>
            <div className="hide-button">
              <i className="fas fa-angle-double-left"></i>Hide Details
            </div>
          </div>
          <div
            className="event-card full-card scroll-event"
            ref={(div) => (this.eventElements[4] = div)}
          >
            <h2>
              <span>Postponed</span>
              <br /> IT’S ABOUT TIME! DIFFRACTING TEMPORALITIES
            </h2>
            <div className="event-details">
              <img src={mkuzma} alt="" />
              <p className="date">Friday, March 27, 2020</p>
              <p className="time">10am to 6pm</p>
              <p className="address">EIK, 32 Edgewood Ave</p>
            </div>
            <h4 className="event-primary">
              Following Yale University guidance in response to the spread of
              COVID-19, the public events comprising the School of Art’s 150th
              Spring Lecture Series have been postponed.
            </h4>
            <p className="event-info">
              With: artist Tauba Auerbach; artist Sarah Oppenheimer; artist
              Rachel Rose; artist Aki Sasamoto with mathematician Pau Atela;
              mathematician Jeffrey Brock in concert with music theorist Brian
              Kane; computer scientist Nisheeth Vishnoi; and researcher and
              engineer Ramon Amaro, amongst others…
            </p>
            <div className="extend-button">
              Read More<i className="fas fa-angle-double-right"></i>
            </div>
            <p className="expanded-details">
              Karen Barad, feminist theorist, author of Meeting the Universe
              Halfway: Quantum Physics and the Entanglement of Matter and
              Meaning, and Professor at the University of California at Santa
              Cruz is joined by friend and collaborator Elaine Gan, co-editor of
              Arts of Living on a Damaged Planet: Ghosts and Monsters of the
              Anthropocene, and Assistant Professor/Faculty Fellow at New York
              University, for an interdisciplinary convergence of dialogue,
              performances, and screenings across the arts and sciences, aimed
              at opening up different possibilities for thinking temporalities
              anew, against the grain of homogenous, empty time, breaking with
              telos, determinism, apocalypse, nostalgia, and progress.
              <br />
              <br />
              The day’s events will be in dialogue with Karen Barad’s lecture:
              “After the End of the World: Entangled Nuclear Colonialisms,
              Matters of Force, and the Material Force of Justice” taking place
              the evening before, on March 26 at 6pm.
              <br />
              <br />
              This event is open to the Yale community.
            </p>
            <div className="hide-button">
              <i className="fas fa-angle-double-left"></i>Hide Details
            </div>
          </div>
          <div
            className="event-card full-card scroll-event"
            ref={(div) => (this.eventElements[5] = div)}
          >
            <h2>
              <span>Postponed</span>
              <br /> MICKALENE THOMAS
            </h2>
            <div className="event-details">
              <img src={mthomas} alt="" />
              <p className="date">Friday, March 27, 2020</p>
              <p className="time">10am to 6pm</p>
              <p className="address">EIK, 32 Edgewood Ave</p>
            </div>
            <h4 className="event-primary">
              Following Yale University guidance in response to the spread of
              COVID-19, the public events comprising the School of Art’s 150th
              Spring Lecture Series have been postponed.
            </h4>
            <p className="event-info">
              MICKALENE THOMAS IN CONVERSATION WITH JASMINE WAHI with 2020
              Presidential Visiting Fellow in Fine Arts, Mickalene Thomas
            </p>
            <div className="extend-button">
              Read More<i className="fas fa-angle-double-right"></i>
            </div>
            <p className="expanded-details">
              Mickalene Thomas is a New York-based distinguished visual artist,
              filmmaker, and curator who works in various mediums. She received
              her MFA from the Yale School of Art, and her BFA from Pratt
              Institute. She is a recipient of the 2019 Meyerhoff-Becker
              Biennial Commission at the Baltimore Museum, a 2015 United States
              Artists Francie Bishop Good &amp; David Horvitz Fellow, and is an
              alumnus of the Studio Museum in Harlem, and the Versailles
              Foundation Munn Artists Program in Giverny. Thomas is a recipient
              of the Aperture Award, Anonymous Was A Woman Award, the 2012
              Brooklyn Museum Asher B. Durand Award, Timerhi Award for
              Leadership in the Arts, the Joan Mitchell Grant and the Pratt
              Institute Alumni Achievement Award in 2009, and the Rema Hort Mann
              Grant in 2007. She’s exhibited at Brooklyn Museum, The Smithsonian
              Museum, MoMA PS1, Seattle Art Museum, SFMoMA, National Portrait
              Gallery, Baltimore Museum, The Bass Museum, AGO Toronto, The
              Wexner Center, and Aspen Museum.
              <br />
              <br />
              Her work is in the permanent collections of The Metropolitan
              Museum of Art, Brooklyn Museum, The Whitney Museum, The Guggenheim
              Museum, The National Portrait Gallery, Newark Museum, Seattle Art
              Museum, The Hara Museum, The Rubell Collection, The Studio Museum
              in Harlem, among other public and private institutions and
              collections. She is on the board of the Brooklyn Museum of
              Trustees and MoMA PS1. Thomas has also previously served on the
              faculty of the Yale School of Art as a Critic in
              Painting/Printmaking, as well as frequented the School as a
              Visiting Artist. Thomas is currently exhibiting at CAC New Orleans
              with museum shows at the Baltimore Museum and the Bass Museum this
              year. She is represented by Kavi Gupta Gallery in Chicago and
              Nathalie Obadia in Paris.
              <br />
              <br />
              Jasmine Wahi is a curator, activist, TEDx speaker, and a founder
              and co-director of the non-profit Project for Empty Space. Her
              practice focuses on issues of femme empowerment, complicating
              binary structures within social discourses, and exploring
              multipositional cultural identities through the lens of
              intersectional feminism. She received her Masters from New York
              University’s Institute of Fine Arts, where she focused on issues
              of intersectional narratives and authorship. In addition to
              running Project for Empty Space, and curating international shows
              independently, Wahi is also a professor at the School of Visual
              Arts, and a former board member of the South Asian Women’s
              Creative Collective &#40;SAWCC&#41;. Her work has been featured in
              The New York Times, The Wall Street Journal, Vogue, Hyperallergic,
              ARTNews, Artforum, and more. Wahi lives in Brooklyn, New York,
              with her dog momo.
            </p>
            <div className="hide-button">
              <i className="fas fa-angle-double-left"></i>Hide Details
            </div>
          </div>
        </div>
        {/* <img src={pencilsleft} alt=""  id="mid-watermark"/> */}
        {/* <img src={pencilsBottom} alt="" id="bottom-watermark" /> */}
        {/* <img src={pencilsRight} alt=""  />
         <img src={pencilsleft} alt=""  /> */}
      </section>
    );
  }
}
