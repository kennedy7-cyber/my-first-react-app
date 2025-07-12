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
  const testimonial = [
    {
      name: "Jane Mwangi",
      role: "Homeowner, Kikuyu",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "Their team found and fixed a hidden pipe leak that I never would have discovered—quick, clean, and efficient!",
    },
    {
      name: "Samuel Njoroge",
      role: "Restaurant Owner",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "Hydrojetting their drain-clean service cleared my old kitchen pipes completely—best investment ever.",
    },
    {
      name: "Lucy Wanjiku",
      role: "Salon Owner",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
      quote:
        "Reliable and on time! Their team was respectful and left the work area spotless.",
    },
    {
      name: "Kevin Otieno",
      role: "Landlord, Embakasi",
      img: "https://randomuser.me/api/portraits/men/41.jpg",
      quote:
        "I had multiple units with leaking taps—they handled everything in a single visit.",
    },
    {
      name: "Miriam Kamau",
      role: "Airbnb Host",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
      quote:
        "They installed my new water heater within hours of calling. Top-tier professionalism.",
    },
    {
      name: "John Kariuki",
      role: "Construction Foreman",
      img: "https://randomuser.me/api/portraits/men/24.jpg",
      quote:
        "Always my first choice when subcontracting plumbing work for housing projects.",
    },
    {
      name: "Alice Nduta",
      role: "Boutique Manager",
      img: "https://randomuser.me/api/portraits/women/30.jpg",
      quote:
        "The plumber was friendly and took time to explain every step. Great experience!",
    },
    {
      name: "Peter Mwenda",
      role: "IT Technician",
      img: "https://randomuser.me/api/portraits/men/57.jpg",
      quote:
        "Fair pricing, fast service. I recommend them to anyone needing urgent repairs.",
    },
    {
      name: "Faith Achieng",
      role: "Office Admin",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "They responded during an emergency at night—very grateful for their quick action.",
    },
    {
      name: "Martin Kimani",
      role: "Car Wash Owner",
      img: "https://randomuser.me/api/portraits/men/15.jpg",
      quote:
        "They upgraded our entire plumbing setup. Business is running smoother than ever.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Carousel */}
      <div id="carouselExample" className="carousel slide">
        <div className="overflow-hidden carousel-inner vh-100 w-100 h-100">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://media.istockphoto.com/id/2187995521/photo/skilled-woman-repairing-a-leaky-sink-by-herself.jpg?s=612x612&w=0&k=20&c=TZbF8NFa3lH_6q58o5jthCdn9wEkvoWDBYS0dXcTWAI="
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
              src="https://media.istockphoto.com/id/2017935909/photo/a-bathroom-with-purple-walls-and-a-shower-head.jpg?s=612x612&w=0&k=20&c=fGUFEibPaKycnDSmw14_woARySzfqQ-HVYVZIWiLPRQ="
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
      <div className=" ">
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
        <div className="d-block row gx-md-4 gy-md-0 gy-4 px-lg-5 px-md-3 px-2 d-md-flex">
          {services.map((service, index) => (
            <div className="col">
              <Cards
                key={index}
                title={service.title}
                description={service.description}
                link={service.link}
                img={service.img}
                linkTitle={service.linkTitle}
              />
            </div>
          ))}
        </div>

        <section className=" py-5 d-flex gap-4  px-lg-5 px-md-3  w-100 ">
          <div className="container ">
            <div className="row gx-4 align-items-center mb-4">
              <div className="col-lg-4">
                <h2 className=" mb-3 text-md-start ">
                  What Our Clients Say
                </h2>
                <p className="lead">
                  We believe in trusted, local service. Here's what our valued
                  clients have shared about their experiences.
                </p>
              </div>
              <div className="col-lg- z">
                <div className="row g-md-4 g-4 row-cols-md-2 row-cols-lg-3 row-cols-1">
                  {/* Testimonial Cards */}
                  {testimonial.map((client, index) => (
                    <div className="col" key={index}>
                      <div className="card border-0 border-bottom border-primary shadow-sm h-100">
                        <div className="card-body p-4">
                          <figure className="text-center mb-4">
                            <img
                              src={client.img}
                              alt={`Photo of ${client.name}`}
                              className="img-fluid rounded-circle border border-4"
                              style={{ width: "80px", height: "80px" }}
                            />
                          </figure>
                          <blockquote className="blockquote-icon mb-4">
                            "{client.quote}"
                          </blockquote>
                          <h5 className="mb-1">{client.name}</h5>
                          <p className="text-secondary small">{client.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Social Media Buttons */}
            <div
              style={{
                position: "fixed",
                right: "20px",
                top: "45%",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                gap: "10px", // also reduced the gap slightly
                zIndex: 1000,
              }}
            >
              {/* WhatsApp */}
              <a
                href="https://wa.me/254758849440"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
                  alt="WhatsApp"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/yourplumbingpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                  alt="Instagram"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/yourplumbingpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                  alt="Facebook"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
