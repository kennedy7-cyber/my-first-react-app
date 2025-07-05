import React from "react";
import { Cards } from "../components";
import { Link } from "react-router-dom"; // Make sure you're using react-router-dom

const Homepage = () => {
  const services = [
    {
      title: "Drain Cleaning",
      img: "https://media.istockphoto.com/id/2171960848/photo/city-municipal-workers-are-doing-urban-sewer-dredging.webp?a=1&b=1&s=612x612&w=0&k=20&c=dlOhYuRNPSjmvpvkK74PakRIzJtpJomzyhATw3ir8jk=",
      description:
        "Comprehensive clearing of commercial and site drains to prevent backups and downtime.",
      link: "#",
      linkTitle: "Learn more",
    },
    {
      title: "Backflow Prevention",
      img: "https://media.istockphoto.com/id/2177010940/photo/backwater-valve-or-backflow-shut-off-valve-in-service-room-of-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=Gp2dgshGAZ2FFK1P9XHpjlekGzOiKtjaCRfg39a25nM=",
      description:
        "Install, test & maintain backflow preventers to keep potable water systems safe.",
      link: "#",
      linkTitle: "Learn more",
    },
    {
      title: "Hydro Jetting",
      img: "https://media.istockphoto.com/id/171239224/photo/hydro-line-jetting.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ie6sSIfewFJWHZR4CgA0yyXRSuGesRLD-15YBnst3BA=",
      description:
        "High-pressure water jetting to remove stubborn grease and debris from pipelines.",
      link: "#",
      linkTitle: "Learn more",
    },
  ];

  return (
    <>
      {/* Carousel */}
      <div id="carouselExample" className="carousel slide">
        <div className="overflow-hidden carousel-inner vh-100 w-100 h-100">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://images.unsplash.com/photo-1658758904121-ee49fc5e205c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBsdW1iaW5nfGVufDB8fDB8fHww"
              className="d-block w-100 h-50"
              alt="Slide 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First Slide Label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://media.istockphoto.com/id/2154917134/photo/sewer-workers-cleaning-manhole-and-unblocking-sewers-the-street-sidewalk.jpg?s=612x612&w=0&k=20&c=hUOzDbCgE86W7plxmn2XR0KgBYSXrekNlrQdZUN6Xss="
              className="d-block w-100"
              alt="Sewer workers cleaning"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Your Drain Cleaning Experts</h5>
              <p>Fast, reliable service to keep your pipes flowing smoothly.</p>
              <a href="#services" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/2162894699/photo/water-pouring-out-of-broken-pipe-pipeline-breakthrough-boiler-station-accident.jpg?s=612x612&w=0&k=20&c=oClF4k9SlXqtOVDhrBZnoi67w9EVTh8AqL0mHrLQaN0="
              className="d-block w-100"
              alt="Slide 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third Slide Label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Welcome Section */}
      <div className="px-5 py-4 bg-dark-subtle">
        <div className="p-3">
          <h1 className="text-center fw-bold py-2">
            Explore the world with us
          </h1>
          <p className="lh-lg fs-6 fw-medium text-center p-3">
            Welcome to <strong>Nex Pipe Tech</strong> — Your Trusted Local
            Plumbing Experts. We deliver fast, reliable plumbing solutions
            tailored to your needs. Whether it’s a leaky faucet, a clogged
            drain, or emergency pipe repair, our certified technicians are
            available 24/7. Enjoy peace of mind with transparent pricing and
            genuine reviews, backed by safety certifications and real project
            experience.
          </p>
          <div className="text-center">
            <Link to="/services">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition bg-warning">
                Explore Our Services
              </button>
            </Link>
          </div>
        </div>

        {/* Services Cards using flex */}
        <div className="d-flex flex-wrap gap-4 justify-content-center px-lg-5 px-md-3 px-2 w-100">
          {services.map((service, index) => (
            <Cards
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
              img={service.img}
              linkTitle={service.linkTitle}
            />
          ))}
        </div>
        <section className="bg-light py-5">
          <div className="container">
            <div className="row gx-4 align-items-center mb-4">
              <div className="col-lg-4">
                <h2 className="display-5 mb-3">What Our Clients Say</h2>
                <p className="lead">
                  We believe in trusted, local service. Here's what our valued
                  clients have shared about their experiences.
                </p>
              </div>
              <div className="col-lg-8">
                <div className="row gy-4">
                  {/* Testimonial Card */}
                  <div className="col-md-6">
                    <div className="card border-0 border-bottom border-primary shadow-sm">
                      <div className="card-body p-4">
                        <figure className="text-center mb-4">
                          <img
                            src="https://randomuser.me/api/portraits/women/65.jpg"
                            alt="Client Photo"
                            className="img-fluid rounded-circle border border-4"
                            style={{ width: "80px", height: "80px" }}
                          />
                        </figure>
                        <blockquote className="blockquote-icon mb-4">
                          "Their team found and fixed a hidden pipe leak that I
                          never would have discovered—quick, clean, and
                          efficient!"
                        </blockquote>
                        <h5 className="mb-1">Jane Mwangi</h5>
                        <p className="text-secondary small">
                          Homeowner, Kikuyu
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card border-0 border-bottom border-primary shadow-sm">
                      <div className="card-body p-4">
                        <figure className="text-center mb-4">
                          <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Client Photo"
                            className="img-fluid rounded-circle border border-4"
                            style={{ width: "80px", height: "80px" }}
                          />
                        </figure>
                        <blockquote className="blockquote-icon mb-4">
                          "Hydrojetting their drain-clean service cleared my old
                          kitchen pipes completely—best investment ever."
                        </blockquote>
                        <h5 className="mb-1">Samuel Njoroge</h5>
                        <p className="text-secondary small">Restaurant Owner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more rows of testimonials as needed */}
          </div>
        </section>
        

        {/* Company History */}
        <div className="py-4">
          <h1 className="text-center fw-normal text-warning-emphasis">
            Our History
          </h1>
          <p className="text-center fw-light bg-danger-emphasis p-3">
            Our plumbing company has proudly served the community for over a
            decade, building a reputation for reliability and quality
            workmanship. Founded by certified professionals, we began with a
            mission to provide fast, honest, and affordable plumbing solutions.
            We've grown through word-of-mouth, offering residential and
            commercial services with dedication, skill, and customer
            satisfaction.
          </p>
        </div>
      </div>
    </>
  );
};

export default Homepage;
