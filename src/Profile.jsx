import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import Prof from "./assets/prof.jpg";

function Profile() {
  return (
    <div className="main-container">
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
              <input type="text" className="form-control" />
              <label htmlFor="">Subject</label>
              <input type="text" className="form-control" />
              <label htmlFor="">Message</label>
              <textarea type="text" className="form-control" />
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
