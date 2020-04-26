// Gallery page

// Import required files
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Swiper from "swiper";
import featured1 from "../assets/featured1.jpg";
import featured2 from "../assets/featured2.jpg";
import featured3 from "../assets/featured3.jpg";
import featured4 from "../assets/featured4.jpg";
import featured5 from "../assets/featured5.jpg";
import featured6 from "../assets/featured6.jpg";
import featured7 from "../assets/featured7.jpg";
import featured8 from "../assets/featured8.jpg";
import featured9 from "../assets/featured9.jpg";
import featured10 from "../assets/featured10.jpg";
import recent1 from "../assets/recent1.jpg";
import recent2 from "../assets/recent2.jpg";
import recent3 from "../assets/recent3.jpg";
import recent4 from "../assets/recent4.jpg";
import recent5 from "../assets/recent5.jpg";
import recent6 from "../assets/recent6.jpg";
import recent7 from "../assets/recent7.jpg";
import recent8 from "../assets/recent8.jpg";
import recent9 from "../assets/recent9.jpg";
import recent10 from "../assets/recent10.jpg";
import "swiper/css/swiper.css";
import watermark from "../assets/watermark4.jpg";
import featured from "../assets/card_inner_painting.png";
// const cta = useRef(null);
// useEffect(() => {
//   gsap.to(
//     [cta.current],
//     0.5,
//     { color: "#23452a" }
//   );
// }, []);
// let tl = new TimelineLite();

function loadModal(modal, e) {
  modal.style.display = "unset";
  let modalImage = document.getElementById("modal-image");
  modalImage.src = e.target.src;

  document.getElementById("date").innerHTML = e.target.dataset.date;
  document.getElementById("owner").innerHTML = e.target.dataset.owner;
  document.getElementById("info").innerHTML = e.target.dataset.info;
  //   console.log(e);
  gsap
    .timeline()
    .to(".swiper-container", { opacity: 0, duration: .2 })
    .to(modal, { opacity: 1, duration: .2 })
    .fromTo([".modal-close","#modal-image"] , {x:500, opacity:0}, {x: 0, opacity: 1, duration: .5})
    // .fromTo("#modal-image", {x:500, opacity:0}, { ease: "back.out(1.7)", x: 0, opacity: 1 })
    .fromTo("p", {y:300, opacity: 0}, {y: 0, opacity:1, delay: 0});
  // console.log(this.modalImage);
}

function modalClose() {
  // let tl = new TimelineLite();
  gsap
    .timeline()
    .to("#modal", 0.4, { opacity: 0 })
    .to(".swiper-container", 0.4, { opacity: 1 })
    .set("#modal", { display: "none" })
  // document.getElementById("modal").style.display = "none";
}

export default class GalleryPage extends Component {
  constructor(props) {
    super(props);
    // this.tl = new TimelineLite({ delay: 0.3 });
    this.headerRef = [];
    this.headerImg = null;
    // this.headerLoader = null;
    // this.buttonRef = [];
    // this.buttonLoader = null;
    // this.swiperContainer = null;
    // this.swiperNext = null;
    // this.swiperPrev = null;
    // this.swiperPagination = null;
    // this.swiperContainer2 = null;
    // this.swiperPagination2 = null;
    this.modalImage = null;
  }
  // After component loads
  //   componentDidMount() {
  //     // Set active nav link
  //     let menuItems = document.getElementsByClassName("active");
  //     for (const element of menuItems) {
  //       element.classList.remove("active");
  //     }
  //     document.getElementById('menu-item-gallery').classList.add("active");

  //     this.headerLoader = gsap.from(this.headerRef, 1, {y: -200});
  //     this.buttonLoader = gsap.to(this.buttonRef, {opacity:1,delay: 1});
  //   };

  componentDidMount() {
    // Set menu to active page
    let menuItems = document.getElementsByClassName("active");
    for (const element of menuItems) {
      element.classList.remove("active");
    }
    document.getElementById("menu-item-gallery").classList.add("active");
    document.getElementById('footer').style.display = "block";
    let modal = document.getElementById("modal");
    // this.modalImage = document.getElementById('model-image');
    modal.style.display = "none";
    // let swiper =
    new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      zoom: {
        maxRatio: 5,
      },
    });
    // console.log(swiper);

    var swiperSlide = document.getElementsByClassName("swiper-slide");
    for (var index = 0; index < swiperSlide.length; index++) {
      swiperSlide[index].addEventListener("click", function (e) {
        loadModal(modal, e);
      });

      //   swiperSlide[index].addEventListener("mouseout", function (e) {
      //     swiper.zoom.out();
      //   });
    }
    // let swiper2 = new Swiper(".swiper-container", {
    //   effect: "coverflow",
    //   grabCursor: true,
    //   centeredSlides: true,
    //   slidesPerView: "auto",
    //   coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     type: "progressbar",
    //   },
    // });

    this.headerImg = gsap.to(this.headerRef, 1, { opacity: 1 });
  }

  componentWillUnmount() {
    let modal = document.getElementById("modal");
    document.getElementById('footer').style.display = "none";
    var swiperSlide = document.getElementsByClassName("swiper-slide");
    for (var index = 0; index < swiperSlide.length; index++) {
      swiperSlide[index].removeEventListener("click", function (e) {
        loadModal(modal, e);
      });
    }
  }

  render() {
    // Set variable for auth status

    return (
      <section id="gallery">
        <img src={watermark} alt="" id="watermark" />
        <div id="modal">
          <div className="modal-card">
            <div onClick={modalClose} className="modal-close">
              <div className="close-text">
                Close Window <i className="far fa-window-close"></i>
              </div>
              
            </div>
            <div className="modal-display">
              <img id="modal-image" src={this.modalImage} alt="" />
              <p>
                Copyright <span id="date"></span> by <span id="owner"></span>
              </p>
              <p id="info"></p>
            </div>
          </div>
        </div>
        <div
          className="swiper-container"
          ref={(div) => (this.headerRef[0] = div)}
        >
          <div className="title-container">
            <img src={featured} alt="" />
            <h1>
              Featured
              <br />
              Work
            </h1>
          </div>

          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={featured1}
                  alt=""
                  data-owner="Bob Smith"
                  data-date="2020"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={featured2}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={featured3}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={featured4}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
                <span className="expand">
                  <i className="fas fa-expand"></i>
                </span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={featured5}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={featured6}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={featured7}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={featured8}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={featured9}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={featured10}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
          </div>
          <div className="expand">
            <i className="fas fa-expand"></i>Select Image For Additional Details
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div
          className="swiper-container"
          id="recent"
          ref={(div) => (this.headerRef[1] = div)}
        >
          <div className="title-container">
            <img src={featured} alt="" />
            <h1>
              Recent
              <br />
              Work
            </h1>
          </div>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={recent1}
                  alt=""
                  data-owner="Bob Smith"
                  data-date="2020"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={recent2}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={recent3}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={recent4}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={recent5}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={recent6}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={recent7}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={recent8}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={recent9}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide"
                  src={recent10}
                  alt=""
                  data-owner="Alex Andrews"
                  data-date="2019"
                  data-info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus hendrerit felis, quis posuere nisi cursus sit amet. Curabitur rutrum semper est, id fringilla nisi vestibulum pulvinar. Integer dignissim ultricies tortor, vel condimentum augue eleifend euismod. Quisque feugiat ultrices ex eu pharetra. Pellentesque interdum lobortis felis quis rhoncus. Suspendisse potenti. Integer quis mi justo."
                />
              </div>
            </div>
          </div>
          <div className="expand">
            <i className="fas fa-expand"></i>Select Image For Additional Details
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    );
  }
}
