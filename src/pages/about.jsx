
import React from "react";

const About = () => {
  return (
    <div className="container-fluid">
      {/* Fixed heading */}
      <h1 className="position-fixed text-center top-0 start-0 w-100 bg-white py-3 shadow">
        Our Global Partners
      </h1>

      {/* Offset content to prevent overlap with fixed header */}
      <div className="pt-5 mt-5">
        <div className="row g-4 px-4">
          {/* Image Cards */}
          {[
            "https://images.unsplash.com/photo-1750126833705-ba98013f16f3",
            "https://images.unsplash.com/photo-1750190437388-862aeca97f9e",
            "https://images.unsplash.com/photo-1742268582641-7dbe0ea10c82",
            "https://images.unsplash.com/photo-1743701168213-89acf87d972c",
          ].map((url, index) => (
            <div className="col-sm-6 col-lg-3" key={index}>
              <div className="card h-100 shadow-sm">
                <img src={`${url}?w=500&auto=format&fit=crop&q=60`} className="card-img-top" alt={`Partner ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>

        {/* About Us Button */}
        <div className="text-center my-5">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#aboutModal"
          >
            About Us
          </button>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="aboutModal"
          tabIndex="-1"
          aria-labelledby="aboutModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="aboutModalLabel">About Us</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                {/* Tabs */}
                <ul className="nav nav-tabs" id="aboutTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="mission-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#mission"
                      type="button"
                      role="tab"
                      aria-controls="mission"
                      aria-selected="true"
                    >
                      Our Mission
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="team-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#team"
                      type="button"
                      role="tab"
                      aria-controls="team"
                      aria-selected="false"
                    >
                      Our Team
                    </button>
                  </li>
                </ul>

                {/* Tab Content */}
                <div className="tab-content py-3" id="aboutTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="mission"
                    role="tabpanel"
                    aria-labelledby="mission-tab"
                  >
                    <h6>Our Mission</h6>
                    <p>
                      We aim to provide the best solutions to our clients by delivering reliable, affordable, and innovative services across the globe.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="team"
                    role="tabpanel"
                    aria-labelledby="team-tab"
                  >
                    <h6>Our Team</h6>
                    <p>
                      Meet our dedicated team of professionals, each bringing unique experience and expertise to help us serve better.
                    </p>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
