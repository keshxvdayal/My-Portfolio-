import React, { useRef } from "react";
// import profileImg from "../../assets/mac1.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./home.css";
import CV from "../../assets/KeshavDayal_InternshalaResume (5).pdf";
import Image from "../../assets/img2005.jpeg";

const Home = () => {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };
  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <section className="home" id="home" data-scroll-section ref={ref}>
        <div className="home__wrapper">
          <div className="home__container container">
            <p className="home__subtitle text-cs">
              Hello, <span>My Name Is</span>
            </p>

            <h1 className="home__title text-cs">
              <span>
                KESHAV <br />
              </span>{" "}
              DAYAL
            </h1>

            <p className="home__job">
              <span className="text-cs">I Am</span> <b>Web Developer</b>
            </p>

            <div className="home__img-wrapper">
              <div className="home__banner">
                <img src={Image} alt="" srcset="" className="home__profile" />
              </div>

              <p className="home__data home__data-one">
                <span className="text-lg">
                  2 <b>+</b>
                </span>

                <span className="text-sm text-cs">
                  Years of <span>Experience</span>
                </span>
              </p>

              <p className="home__data home__data-two">
                <span className="text-lg">11</span>

                <span className="text-sm text-cs">
                  Completed <span>Projects</span>
                </span>
              </p>

              <img src={shapeOne} alt="" className="shape shape__1" />
              <img src={shapeTwo} alt="" className="shape shape__2" />
              <img src={shapeTwo} alt="" className="shape shape__3" />
            </div>

            <p className="home__text">
              a tech enthusiast passionate about web and Android development,
              AI/ML, UI/UX. Always exploring, I am at the forefront of
              innovation in the dynamic tech landscape
            </p>

            <div className="home__socials">
              <a
                href="https://www.instagram.com/keshxvdayal/"
                className="home__social-link"
              >
                <FaInstagram />
              </a>

              <a
                href="https://github.com/keshxvdayal"
                className="home__social-link"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/keshav-dayal/"
                className="home__social-link"
              >
                <FaLinkedin />
              </a>
            </div>

            <div className="home__btns">
              <a download={CV} href={CV} className="btn text-cs">
                Download resume
              </a>

              <a href="#skills" className="hero__link text-cs">
                My Skills
              </a>
            </div>
          </div>

          <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className="shape" />
          </div>
        </div>

        <div className="section__bg-wrapper">
          <span className="bg__title">Web Developer</span>
        </div>
      </section>
    </LocomotiveScrollProvider>
  );
};

export default Home;
