import React from "react";
import { Cards } from "../components";

const Homepage = () => {
  console.log("h");
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="overflow-hidden vh-100 w-100 h-100">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="https://images.unsplash.com/photo-1746105839114-fbc9c81fcb17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D"
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
              src="https://images.unsplash.com/photo-1575291340751-7fbc9480de13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2aWNlc3xlbnwwfHwwfHx8MA%3D%3D"
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
      <div>
        <h1>Explore the world with us</h1>
        <p>
          Whether you seek an unforgettable helicopter charter experience, an
          unparalleled journey with our high-quality private jet charter
          services, where luxury and efficiency converge at 40,000 feet, or an
          international top-tier maintenance services, we're here to elevate
          your expectations.
        </p>
      </div>
      <div className="w-100 d-md-flex  d-block gap-4 px-lg-5 px-md-3 px-2">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
};

export default Homepage;
