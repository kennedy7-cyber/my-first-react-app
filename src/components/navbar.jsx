import React from "react";
import { GiTeePipe } from "react-icons/gi";

const Navbar = () => {
  const plumbingServices = [
    {
      name: "Leak Detection & Repair",
      link: "services",
      icon: <GiTeePipe />,
    },
    {
      name: "Drain Cleaning",
      link: "services",
      icon: <GiTeePipe />,
    },
    {
      name: "Toilet Installation & Repair",
      link: "services",
      icon: <GiTeePipe />,
    },
    {
      name: "Water Heater Services",
      link: "services",
      icon: <GiTeePipe />,
    },
    {
      name: "Pipe Installation & Repiping",
      link: "services",
      icon: <GiTeePipe />,
    },
    {
      name: "Emergency Plumbing",
      link: "services",
      icon: <GiTeePipe />,
    },
    {
      name: "Gas Line Services",
      link: "services",
      icon: <GiTeePipe />,
    },
    {
      name: "Sewer Line Repair",
      link: "services",
      icon: <GiTeePipe />,
    },
    {
      name: "Fixture Installation",
      link: "services",
      icon: <GiTeePipe />,
    },
    {
      name: "Backflow Prevention",
      link: "services",
      icon: <GiTeePipe />,
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Nex pipe tech
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about-us">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact-us">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog-in">
                Blogs
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="services"
                role="button"
                // data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                {plumbingServices.map((item, index) => (
                  <li>
                    <span>{item.icon}</span>
                    <a className="dropdown-item" href="services">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
