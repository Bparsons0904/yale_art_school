// News page

// Import required files
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { gsap } from "gsap";
import watermark from "../assets/watermark4.jpg";
import wbailey from "../assets/w_bailey.jpg";
import wbailey2 from "../assets/w_bailey2.jpg";
import wbailey3 from "../assets/w_bailey3.jpg";
import dsinger from "../assets/dsinger.jpg";
import asteiner from "../assets/asteiner.jpg";
import jsimon from "../assets/jsimon.jpg";
import headerImg from "../assets/newpaper.jpg";
import headerImg2 from "../assets/newpaper-vert.jpg";

const link1 =
  "https://www.nytimes.com/2020/04/18/arts/william-bailey-dead.html?searchResultPosition=1";
const link2 = "https://www.artforum.com/news/william-bailey-1930-2020-82767";

function extendDetails(e) {
  if (e.target.classList[0] === "fas") {
    e.target.parentElement.style.display = "none";
    gsap.set(e.target.parentElement.nextSibling, { height: "auto" });
    gsap.from(e.target.parentElement.nextSibling, { height: 0, duration: 2 });
  } else {
    e.target.style.display = "none";
    gsap.set(e.target.nextSibling, { height: "auto" });
    gsap.from(e.target.nextSibling, { height: 0, duration: 2 });
  }
}

function hideDetails(e) {
  if (e.target.classList[0] === "fas") {
    e.target.parentElement.parentElement.previousSibling.style.display =
      "block";
    gsap.to(e.target.parentElement.parentElement, 1, {
      height: 0,
      duration: 1,
    });
    e.target.parentElement.parentElement.previousSibling.parentElement.scrollIntoView();
  } else {
    e.target.parentElement.previousSibling.style.display = "block";
    gsap.to(e.target.parentElement, 1, { height: 0, duration: 1 });
    e.target.parentElement.previousSibling.parentElement.scrollIntoView();
  }
}

export default class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerImage: headerImg2,
    };
  }

  updateDimensions() {
    this.setState((state) => {
      return { headerImage: window.innerWidth < 1200 ? headerImg : headerImg2 };
    });
  }

  componentDidMount() {
    // Set menu to active page
    let menuItems = document.getElementsByClassName("active");
    for (const element of menuItems) {
      element.classList.remove("active");
    }
    document.getElementById("menu-item-news").classList.add("active");
    document.getElementById("footer").style.display = "block";
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
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    document.getElementById("footer").style.display = "none";
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    // Set variable for auth status
    this.headerImage = window.innerWidth < 1200 ? headerImg : headerImg2;
    return (
      <section id="news">
        <img src={watermark} alt="" id="watermark" />

        <div className="container">
          <div id="header-img-container">
            <img
              src={this.headerImage}
              alt=""
              id="header-img"
              className="img-shadow"
            />
          </div>
          <div className="article-group">
            <article id="headline" className="news-article">
              <div className="card">
                <h1>APRIL 17, 2020</h1>
                <div className="card-image-container">
                  <img src={wbailey} alt="" />
                </div>
                <h3 className="details">
                  Yale School of Art mourns the passing of William Bailey:
                  Alumnus, Former Dean, and Kingman Brwester Professor Emeritus
                  of Art.
                </h3>
                <div className="extend-button">
                  Read More<i className="fas fa-angle-double-right"></i>
                </div>
                <div className="expanded-details">
                  <p>
                    We are saddened to share the news with the School of Art
                    community that William Bailey, distinguished alumni, former
                    dean and faculty member, as well as the Kingman Brewster
                    Professor Emeritus of Art, passed away on April 13, 2020 at
                    his home in Branford, Connecticut due to complications from
                    an existing illness. Regarded in his art practice for his
                    meditative approach to realism, Bailey was an esteemed
                    member of the Yale School of Art faculty and community, and
                    he played a pivotal role in informing and developing its
                    pedagogy for nearly three decades.
                  </p>
                  <div className="card-image-container">
                    <img src={wbailey2} alt="" className="inline-iamge" />
                  </div>
                  <p>
                    Having earned both his BFA in 1955 and his MFA in 1957 at
                    what was then the Yale School of Art and Architecture,
                    William “Bill” Bailey joined the faculty as a Professor of
                    Art in 1969 before his appointment as Dean from 1974 to
                    1975. During his time as Professor and then as Dean, Bailey
                    was essential in fostering a sense of academic continuity as
                    the institution formally became designated as the Yale
                    School of Art when the School of Architecture was
                    established as a separate school by the University in 1972.
                    After his time as Dean, Bailey continued to serve as a
                    prominent member of the faculty in the department of
                    Painting until retiring in 1995.{" "}
                  </p>
                  <div className="card-image-container">
                    <img src={wbailey3} alt="" className="inline-iamge" />
                  </div>
                  <div className="hide-button">
                    <i className="fas fa-angle-double-left"></i>Hide Details
                  </div>
                </div>

                <h3>
                  The School of Art extends sincere condolences to Professor
                  Bailey’s family and loved ones at this sad time.
                </h3>
                <div className="links">
                  <h4>ADDITIONAL REMEMBRANCES:</h4>
                  <a href={link1} target="_blank" rel="noopener noreferrer">
                    “William Bailey, Modernist Figurative Painter, Dies at 89”
                    published in The New York Times, April 18, 2020
                  </a>
                  <a href={link2} target="_blank" rel="noopener noreferrer">
                    “William Bailey, Modernist Figurative Painter, Dies at 89”
                    published in The New York Times, April 18, 2020 “William
                    Bailey (1930–2020),” published in Artforum, April 20, 2020
                  </a>
                </div>
              </div>
            </article>
            <article className="news-article">
              <div className="card">
                <h1>APRIL 9, 2020</h1>
                <div className="card-image-container">
                  <img src={jsimon} alt="" />
                </div>
                <h3 className="details">
                  Yale School of Art faculty Danna Singer and A.L. Steiner named
                  Guggenheim Fellows alongside three alumni.
                </h3>
                <div className="extend-button">
                  Read More<i className="fas fa-angle-double-right"></i>
                </div>
                <div className="expanded-details">
                  <p className="details">
                    The Yale School of Art is pleased to announce that faculty
                    members Danna Singer and A.L. Steiner are among the 2020
                    Guggenheim Fellows named today by the John Simon Guggenheim
                    Memorial Foundation. Three Yale School of Art alumni are
                    also named among the 2020 Guggenheim Fellows: artists Leslie
                    Hewitt, Gordon Ennis Moore, and Katy Schimert, whose
                    graduating classes span from 1972 to 2004.
                  </p>

                  <p className="float-text">
                    This year’s fellowships were awarded to 175 writers,
                    scholars, artists, and scientists meticulously selected from
                    nearly 3,000 applicants across the United States and Canada
                    in the Foundation’s ninety-sixth competition. Chosen through
                    a rigorous peer-review process on the basis of both prior
                    achievement and exceptional promise, the 2020 Fellows are
                    drawn from 53 scholarly disciplines and artistic fields, 78
                    academic institutions, 31 states and the District of
                    Columbia, and 2 Canadian provinces.
                  </p>
                  <div className="combo-grp">
                    <div className="card-image-container">
                      <img
                        src={dsinger}
                        alt=""
                        className="inline-iamge low-res-left"
                      />
                    </div>
                    <p>
                      Danna Singer was appointed by the School of Art as a
                      Lecturer in Photography in the fall of 2019, after
                      graduating from the program with an MFA in Photography in
                      2017. A photographer and educator, Singer’s work largely
                      focuses on the social ramifications of economic
                      inequality, depicting the struggles of working-class
                      Americans.
                    </p>
                  </div>
                  <div className="combo-grp">
                    <p>
                      A.L. Steiner was appointed by the School of Art as a Yale
                      Presidential Visiting Fellow in Photography for 2018, and
                      in January 2019 she began her new appointment as Senior
                      Critic in Film/Video. Steiner’s approach within the genre
                      of film, video, and lens-based media emphasizes an artist
                      practice that reflects that of a critical cultural
                      producer exploring the traditions of collage and montage.
                    </p>
                    <div className="card-image-container">
                      <img
                        src={asteiner}
                        alt=""
                        className="inline-iamge low-res-right"
                      />
                    </div>
                  </div>

                  <p>
                    Since its establishment in 1925, the John Simon Guggenheim
                    Memorial Foundation has granted more than $375 million in
                    Fellowships to over 18,000 individuals, among whom are
                    scores of Nobel laureates, Fields Medalists, poets laureate,
                    members of the national academies, winners of the Pulitzer
                    Prize, Turing Award, Bancroft Prize, National Book Award,
                    and many other internationally recognized honors
                  </p>
                  <div className="hide-button">
                    <i className="fas fa-angle-double-left"></i>Hide Details
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
}
