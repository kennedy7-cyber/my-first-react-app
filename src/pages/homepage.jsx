import React from "react";
import { Cards } from "../components";

const Homepage = () => {
  const services = [
    {
      title: "Drain Cleaning",
      img: "https://media.istockphoto.com/id/2171960848/photo/city-municipal-workers-are-doing-urban-sewer-dredging.webp?a=1&b=1&s=612x612&w=0&k=20&c=dlOhYuRNPSjmvpvkK74PakRIzJtpJomzyhATw3ir8jk=",
      description:
        "Comprehensive clearing of commercial and site drains to prevent backups and downtime.",
      link: "#",

      linkTitle: "learn more",
    },
    {
      title: "Backflow Prevention",
      img: "https://media.istockphoto.com/id/2177010940/photo/backwater-valve-or-backflow-shut-off-valve-in-service-room-of-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=Gp2dgshGAZ2FFK1P9XHpjlekGzOiKtjaCRfg39a25nM=",
      description:
        "Install, test & maintain backflow preventers to keep potable water systems safe.",
      link: "#",
      linkTitle: "learn more",
    },
    {
      title: "Hydro Jetting",
      img: "https://media.istockphoto.com/id/171239224/photo/hydro-line-jetting.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ie6sSIfewFJWHZR4CgA0yyXRSuGesRLD-15YBnst3BA=",
      description:
        "High-pressure water jetting to remove stubborn grease and debris from pipelines.",
      link: "#",
      linkTitle: "learn more",
    },
  ];

  console.log("gh");
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="overflow-hidden carousel-inner vh-100 w-100 h-100">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="https://images.unsplash.com/photo-1658758904121-ee49fc5e205c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBsdW1iaW5nfGVufDB8fDB8fHww"
              class="d-block w-100 h-50"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://media.istockphoto.com/id/2154917134/photo/sewer-workers-cleaning-manhole-and-unblocking-sewers-the-street-sidewalk.jpg?s=612x612&w=0&k=20&c=hUOzDbCgE86W7plxmn2XR0KgBYSXrekNlrQdZUN6Xss="
              class="d-block w-100"
              alt="Sewer workers cleaning"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Your Drain Cleaning Experts</h5>
              <p>Fast, reliable service to keep your pipes flowing smoothly.</p>
              <a href="#services" class="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="https://media.istockphoto.com/id/2162894699/photo/water-pouring-out-of-broken-pipe-pipeline-breakthrough-boiler-station-accident.jpg?s=612x612&w=0&k=20&c=oClF4k9SlXqtOVDhrBZnoi67w9EVTh8AqL0mHrLQaN0="
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
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
      <div className="px-5 py-4 bg-dark-subtle">
      <div className="p-3n">
        <h1 className="text-center fw-bold py-2">Explore the world with us</h1>
        <p className="lh-lg fs-6 text-start text-end fw-medium text-center p-3">
          A well‑designed plumbing website acts as a digital storefront,
          featuring a clean, professional layout with easy-to-use navigation and
          prominently displayed contact options like click-to-call buttons or
          booking forms. It clearly outlines services—such as leak repair, water
          heater installation, and emergency call‑outs—with accessible pricing
          or service descriptions. Trust is built through customer testimonials,
          certifications (like Gas Safe), and real project photos.
          Mobile-friendly design, fast load times, and local SEO optimize
          visibility for homeowners searching for reliable, nearby plumbers
        </p>
      </div>
      <div className="w-100 d-md-flex  d-block gap-4 px-lg-5 px-md-3 px-2">
        {services.map((service, index) => (
          <Cards
            title={service.title}
            description={service.description}
            link={service.link}
            img={service.img}
            linkTitle={service.linkTitle}
          />
        ))}
      </div>
      <div className="py-4">
        <h1 className="text-center fw-normal text-warning-emphasis">Our History</h1>
        <p className=" text-center fw-light bg-danger-emphasis">
         
         Our plumbing company has proudly served the community for over a years, building a solid reputation for reliability and quality workmanship. Founded by a team of certified professionals, we began with a simple mission: to provide fast, honest, and affordable plumbing solutions. Over the years, we’ve grown through word-of-mouth and customer trust, expanding our services to meet both residential and commercial needs. From emergency repairs to full installations, our history is built on dedication, skill, and customer satisfaction.
        </p>
      </div>
      </div>
    </>
  );
};

export default Homepage;
