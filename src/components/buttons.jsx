import React from "react";

const Buttons = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#aboutModal"
      >
        About Us
      </button>
      <div
        class="modal fade"
        id="aboutModal"
        tabindex="-1"
        aria-labelledby="aboutModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="aboutModalLabel">
                About Us
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <ul class="nav nav-tabs" id="aboutTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
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
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
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
              <div class="tab-content py-3" id="aboutTabContent">
                <div
                  class="tab-pane fade show active"
                  id="mission"
                  role="tabpanel"
                  aria-labelledby="mission-tab"
                >
                  <h6>Our Mission</h6>
                  <p>
                    We aim to provide the best solutions to our clients by...
                  </p>
                </div>
                <div
                  class="tab-pane fade"
                  id="team"
                  role="tabpanel"
                  aria-labelledby="team-tab"
                >
                  <h6>Our Team</h6>
                  <p>Meet our dedicated team of professionals...</p>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
