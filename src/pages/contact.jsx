
import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 bg-white p-4 shadow rounded">
          <h2 className="text-center mb-4">Contact Us</h2>
          
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Type your message..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>

          <hr className="my-4" />

          <div className="row text-center">
            <div className="col-md-4">
              <h6>📞 Phone</h6>
              <p>+254 712 345 678</p>
            </div>
            <div className="col-md-4">
              <h6>📧 Email</h6>
              <p>info@example.com</p>
            </div>
            <div className="col-md-4">
              <h6>📍 Location</h6>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
