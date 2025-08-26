import "./style.css";
import Navbar from "./Navbar";
import Prof from "./assets/prof.jpg";
import Lepo from "./assets/login.png";
import Intrams from "./assets/intrams.png";
import React, { useEffect, useState } from "react";

function Profile() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="main-container">
      {show && (
        <span
          onClick={scrollToTop}
          className="up-btn"
          style={{
            bottom: "30px",
            right: "30px",
            zIndex: 1000,
          }}
        >
          <i class="bi bi-chevron-double-up"></i>
        </span>
      )}

      <Navbar />
      <section className="d-flex" id="home">
        <img src={Prof} alt="" />
        <div>
          <h2>Ivan Bengcolado</h2>
          <h5>Frontend Developer</h5>
          <p>
            💻 I enjoy turning ideas into reality through code, creating
            intuitive interfaces, and solving problems with modern frontend
            technologies.
          </p>
          <p>
            🚀 My goal is to grow as a developer, contribute to meaningful
            projects, and continue exploring new tools that shape the future of
            the web.
          </p>
        </div>
      </section>
      <section id="education">
        <h4 className="align-self-center">Education</h4>
        <div>
          <div></div>
        </div>
      </section>
      <section id="skills">
        <h4 className="align-self-center">Skills</h4>
        <div>
          <div className="bg-white">
            <span>
              <i class="bi bi-code-slash text-warning fs-1"></i>
            </span>
            <p>HTML</p>
          </div>
          <div className="bg-white">
            <span>
              <i class="bi bi-filetype-css text-primary fs-1"></i>
            </span>
            <p>CSS</p>
          </div>
          <div className="bg-white">
            <span>
              <i class="bi bi-bootstrap text-success fs-1"></i>
            </span>
            <p>Bootstrap</p>
          </div>
          <div className="bg-white">
            <span>
              <i class="bi bi-filetype-jsx text-info fs-1"></i>
            </span>
            <p>React JS</p>
          </div>
          <div className="bg-white">
            <span>
              <i class="bi bi-braces text-warning fs-1"></i>
            </span>
            <p>Node JS</p>
          </div>
          <div className="bg-white">
            <span>
              <i class="bi bi-database text-danger fs-1"></i>
            </span>
            <p>Mysql</p>
          </div>
        </div>
      </section>
      <section id="projects">
        <h4 className="align-self-center">Projects</h4>
        <div>
          <div>
            <img src={Lepo} alt="" />
            <div className="d-flex flex-column p-3">
              <h6>e-Leporidae</h6>
              <p>
                e-Leporidae is a platform that helps rabbit owners responsibly
                rehome their rabbits by connecting them with caring adopters.
                What sets it apart is the option to use agricultural products as
                a form of exchange or payment, promoting inclusivity and
                sustainability. With e-Leporidae, clients can ensure their
                rabbits find safe homes while supporting local communities.
              </p>
              <div className="d-flex gap-2">
                <span className="badge text-bg-info">ReactJS</span>
                <span className="badge text-bg-primary">Bootstrap</span>
                <span className="badge text-bg-info">Css</span>
                <span className="badge text-bg-warning">NodeJS</span>
                <span className="badge text-bg-danger">MySQL</span>
              </div>
            </div>
          </div>
          <div>
            <img src={Intrams} alt="" />
            <div className="d-flex flex-column p-3">
              <h6>e-Intrams (Ongoing for development)</h6>
              <p>
                e-Intrams is a digital platform designed to help schools
                efficiently manage intramural events. It allows administrators
                to organize teams, schedules, and game results in one system
                while providing students and staff with easy access to event
                updates. With automated tracking and streamlined coordination,
                E-Intrams reduces manual work and ensures a smooth, engaging
                intramural experience for the whole school community.
              </p>
              <div className="d-flex gap-2">
                <span className="badge text-bg-info">ReactJS</span>
                <span className="badge text-bg-primary">Bootstrap</span>
                <span className="badge text-bg-info">Css</span>
                <span className="badge text-bg-warning">NodeJS</span>
                <span className="badge text-bg-danger">MySQL</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section id="contact">
        <h4 className="align-self-center">Get in touch</h4>
        <div className="bg-white">
          <div className="d-flex flex-column gap-4">
            <h4 className="align-self-center">Contact Me</h4>
            <div className="d-flex gap-4 align-items-center">
              <i class="bi bi-telephone-plus"></i> <h5>09815808362</h5>
            </div>
            <div className="d-flex gap-4 align-items-center">
              <i class="bi bi-envelope-at"></i>
              <h5>ivanpaglinawan0@gmail.com</h5>
            </div>
            <div className="d-flex gap-4 align-items-center">
              <i class="bi bi-geo-alt"></i> <h5>Camarines Sur, Philippines</h5>
            </div>
          </div>
          <div>
            <form className="d-flex flex-column gap-2">
              <h4 className="align-self-center">Message me</h4>
              <label htmlFor="">Email</label>
              <input type="email" className="form-control" required />
              <label htmlFor="">Subject</label>
              <input type="text" className="form-control" required />
              <label htmlFor="">Message</label>
              <textarea type="text" className="form-control" required />
              <button
                type="submit"
                className="btn btn-primary align-self-end mt-1"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="footer d-flex flex-column justify-content-center align-items-center gap-2 py-5">
        <span>© 2025 Ivan Bengcolado. All rights reserved.</span>
        <div className="d-flex gap-4">
          <a target="blank" href="https://www.facebook.com/ivan.bengcolado.50/">
            <i class="bi bi-facebook fs-1"></i>
          </a>
          <a href="">
            <i class="bi bi-instagram fs-1"></i>
          </a>
          <a target="blank" href="https://github.com/vannys0">
            <i class="bi bi-github fs-1"></i>
          </a>
          <a target="blank" href="">
            <i class="bi bi-linkedin fs-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
