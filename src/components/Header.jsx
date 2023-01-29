import React from "react";
import logo from "../heronbendlogo.png";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand d-lg-none" href="#">
            <img src={logo}></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <a class="nav-item emailitem">
              <a class="nav-link text-white" href="#">
                <b>Phone: (703)-655-8764</b>
              </a>
              <a class="nav-link text-white" href="#">
                <b>Email: heronbendhoa@gmail.com</b>
              </a>
            </a>
            <ul class="navbar-nav mx-auto">
              {/* <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>*/}
              <a class="navbar-brand d-lg-block d-none navlogo ">
                <img src={logo}></img>
              </a>
              {/* <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul> */}
              {/* </li> */}
            </ul>
            <a class="nav-item">
              <a class="nav-link loginuser" href="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="white"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </a>
            </a>
          </div>
        </div>
      </nav>
      <div class="wrapcontainer">
        <div class="container container1">
          <header class="d-flex justify-content-center py-3 ">
            <ul class="nav nav-pills">
              <li class="nav-item ">
                <a href="/" class="nav-link text-black">
                  <b>Home</b>
                </a>
              </li>
              <li class="nav-item">
                <a href="/announcements" class="nav-link text-black">
                  <b>Announcements</b>
                </a>
              </li>
              <li class="nav-item">
                <a href="/commitee" class="nav-link text-black">
                  <b>Committee</b>
                </a>
              </li>
              <li class="nav-item">
                <a href="/Info" class="nav-link text-black">
                  <b>Info Center</b>
                </a>
              </li>
              {/* <li class="nav-item">
                <a href="/chat" class="nav-link text-black">
                  <b>Chat</b>
                </a>
              </li> */}
              <li class="nav-item">
                <a href="/Contact" class="nav-link text-black">
                  <b>Contact Center</b>
                </a>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </div>
  );
}

export default Header;
