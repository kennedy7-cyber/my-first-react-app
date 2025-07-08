
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 mt-5 shadow-lg">
      <div className="container">
        <div className="row pb-4 border-bottom border-secondary">
          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-warning">📍 Contact</h5>
            <p className="small lh-lg">
              📞 <strong>0758849440</strong><br />
              ✉️ <a href="mailto:email@plumbing.com" className="text-decoration-none text-light">email@plumbing.com</a><br />
              <span>Serving: <strong>[wangige kabete]</strong></span>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-warning">🔗 Navigate</h5>
            <ul className="list-unstyled">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.path}
                    className="text-light text-decoration-none hover-underline"
                    style={{ transition: "0.3s" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter and Badges */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-warning">📬 Stay Updated</h5>
            <form className="d-flex mb-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your email"
              />
              <button className="btn btn-primary">Subscribe</button>
            </form>
            <div className="d-flex gap-2">
              <img src="badge1.png" alt="Badge" width="50" height="50" />
              <img src="badge2.png" alt="Badge" width="50" height="50" />
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center text-secondary py-3 small">
          &copy; {new Date().getFullYear()} <strong>Plumbing Insights</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
