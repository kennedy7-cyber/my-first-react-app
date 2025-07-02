
import React from "react";

const Contact = () => {
  return (
    <div className="container py-5 px-4 md-5 mb-5" >
  <h2 className="text-center text-dark fw-bold mb-4 py-5 px-3  ">Contact Us</h2>
  <p className="text-center mb-5 text-muted fw-bold">
    Have a plumbing issue or need a quote? Fill out the form and we’ll get back to you!
  </p>

  <div className="row justify-content-center">
    <div className="col-12 col-md-8 col-lg-6">
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control form-control-lg" id="name" placeholder="Enter your name" required />
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
    <p><strong>Email:</strong> support@yourplumbing.com</p>
    <p><strong>Location:</strong> Kiambu Wangige, Kenya</p>
  </div>
</div>

  );
};

export default Contact;
