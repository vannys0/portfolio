import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-md bg-body-tertiary fixed-top px-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="#home">
          IVAN
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav w-100 d-flex justify-content-end gap-md-4">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#home">
                Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#education">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
