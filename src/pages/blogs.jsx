import React from "react";

const Blogs = () => (
  <div className="">
    {/* Header */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          [LOGO]
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <a className="dropdown-item" href="/services/commercial">
                    Commercial
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/services/construction">
                    Construction
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/services/area">
                    Area Services
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <a href="/quote" className="btn btn-primary fw-bold">
            Get a Quote
          </a>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="py-5 text-center bg-light">
      <div className="container">
        <h1 className="">Plumbing Insights & Industry Tips</h1>
        <p className="lead py-4">
          Expert advice for commercial, construction, and general plumbing
          projects
        </p>
        <form className="row justify-content-center g-2">
          <div className="col-md-6">
            <input
              type="search"
              className="form-control"
              placeholder="Search articles..."
            />
          </div>
          <div className="col-auto">
            <select className="form-select">
              <option>All Categories</option>
              <option>Commercial</option>
              <option>Construction</option>
              <option>Area Services</option>
            </select>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary">Request a Project Quote</button>
          </div>
        </form>
      </div>
    </section>

    {/* Main Content */}
    <div className="container my-5">
      <div className="row">
        {/* Blog Posts */}
        <div className="col-lg-8">
          {/* Featured Post */}
          <article className="mb-5">
            <img
              src="https://media.istockphoto.com/id/1159234172/photo/industrial-photo.jpg?s=612x612&w=0&k=20&c=F6UcGiYu4U-hPbvpSvDftR0Jx8hSeLONyeIJjNaoCX4="
              className="img-fluid mb-3"
              alt="Featured"
            />
            <h2>Featured Plumbing Post Title</h2>
            <p className="text-muted">June 28, 2025 • Commercial</p>
            <p>
              Summary of about 30 words introducing the key insights from this
              post...
            </p>
            <a href="#" className="btn btn-outline-primary">
              Read More
            </a>
          </article>

          {/* Articles Grid */}
          <div className="row g-4">
            {/* Sample Post Card */}
            <div className="col-md-6">
              <div className="card h-50">
                <img
                  src="https://media.istockphoto.com/id/1187641813/photo/copper-and-brass-plumbing-parts-for-water-system-repair.jpg?s=612x612&w=0&k=20&c=UYAYGYxwe9UMCtGKRWIUTufP3UrvRosSLCujC1ILbfM="
                  className="card-img-top"
                  alt="Thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title">Post Title</h5>
                  <span className="badge bg-secondary">Construction</span>
                  <p className="card-text mt-2">
                    Snippet text for the article...
                  </p>
                  <p className="text-muted small">June 25, 2025</p>
                  <a href="#" className="stretched-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="col-lg-4">
          {/* Quick Quote Form */}
          <div className="card mb-4">
            <div className="card-body">
              <h5>Quick Quote</h5>
              <form>
                <input className="form-control mb-2" placeholder="Name" />
                <input className="form-control mb-2" placeholder="Contact" />
                <select className="form-select mb-2">
                  <option>Project Type</option>
                  <option>Commercial</option>
                  <option>Construction</option>
                  <option>Area Work</option>
                </select>
                <button className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>

          {/* Popular Posts */}
          <div className="mb-4">
            <h5>Popular Posts</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Post One</a>
              </li>
              <li>
                <a href="#">Post Two</a>
              </li>
              <li>
                <a href="#">Post Three</a>
              </li>
            </ul>
          </div>

          {/* Testimonials Carousel */}
          <div
            id="testimonials"
            className="carousel slide mb-4"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <blockquote className="blockquote">
                  <p>"Great commercial plumbing!"</p>
                  <footer>— Client A</footer>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="blockquote">
                  <p>"Reliable construction team."</p>
                  <footer>— Client B</footer>
                </blockquote>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonials"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonials"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
            </button>
          </div>

          <div className="d-grid">
            <a href="#" className="btn btn-warning fw-bold">
              Need commercial plumbing today? Call us now!
            </a>
          </div>
        </aside>
      </div>
    </div>
    {/* Bootstrap */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    
      {/* Floating Social Media Buttons */}
      <div
        style={{
          position: "fixed",
          right: "20px",
          top: "45%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
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
);

export default Blogs;
