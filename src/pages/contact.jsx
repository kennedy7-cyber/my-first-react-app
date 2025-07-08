
import React from "react";

const Contact = () => {
  return (
    <div className="position-relative">
      <div className="container py-5 px-4 mb-5">
        <h2 className="text-center text-dark fw-bold mb-4 py-5 px-3">Contact Us</h2>
        <p className="text-center mb-5 text-muted fw-bold">
          Have a plumbing issue or need a quote? Fill out the form and we’ll get back to you!
        </p>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <form>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="John" required />
                </div>
                <div className="col">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="mb-3 row">
                <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" placeholder="+2547XXXXXXXX" />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="How can we help you?" required></textarea>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center mt-5 text-muted">
          <p><strong>Phone:</strong> +254 0758849440</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@yourplumbing.com">support@yourplumbing.com</a>
          </p>
          <p><strong>Location:</strong> Kiambu Wangige, Kenya</p>
        </div>
      </div>
      {/* Floating Social Buttons - WhatsApp & Instagram */}
<div
  style={{
    position: "fixed",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  }}
>
  <a
    href="https://wa.me/254758849440"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
      alt="WhatsApp"
      style={{ width: "60px", height: "60px" }}
    />
  </a>

  <a
    href="https://instagram.com/your_instagram_username" // <-- Replace with your handle
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
      alt="Instagram"
      style={{ width: "60px", height: "60px" }}
    />
  </a>
</div>

    </div>
  );
};

export default Contact;