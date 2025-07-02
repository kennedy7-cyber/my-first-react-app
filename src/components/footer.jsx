import React from "react";

const Footer = () => {
  return (
    <div>

    {/* Footer */}
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h6>Contact</h6>
            <p>📞 123‑456‑7890<br />✉️ email@plumbing.com</p>
            <p>Serving: [Your City/Region]</p>
          </div>
          <div className="col-md-4 mb-3">
            <h6>Navigate</h6>
            <ul className="list-unstyled">
              <li><a className="text-light" href="/">Home</a></li>
              <li><a className="text-light" href="/about">About</a></li>
              <li><a className="text-light" href="/services">Services</a></li>
              <li><a className="text-light" href="/blog">Blog</a></li>
              <li><a className="text-light" href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h6>Stay Updated</h6>
            <form className="d-flex mb-3">
              <input type="email" className="form-control me-2" placeholder="Your email" />
              <button className="btn btn-primary">Subscribe</button>
            </form>
            <img src="badge1.png" alt="Badge" width="50" />
            <img src="badge2.png" alt="Badge" width="50" />
          </div>
        </div>
        <div className="text-center py-3">&copy; 2025 Plumbing Insights</div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
