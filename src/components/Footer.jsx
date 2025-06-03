import { Outlet, Link } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-dark py-5 text-white">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-calendar-event fs-3 me-2"></i>
                <h5 className="fw-bold mb-0">EventHub</h5>
              </div>
              <p className="text-white-50">
                Your gateway to amazing events and experiences. Discover,
                connect, and join events in your community.
              </p>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-white">
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-twitter-x fs-5"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    to="/"
                    className="text-decoration-none text-white-50 hover-white"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/events"
                    className="text-decoration-none text-white-50 hover-white"
                  >
                    Browse Events
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/contact"
                    className="text-decoration-none text-white-50 hover-white"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-decoration-none text-white-50 hover-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none text-white-50 hover-white"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="fw-bold mb-3">Contact Info</h5>
              <ul className="list-unstyled">
                <li className="d-flex mb-3">
                  <i className="bi bi-geo-alt text-orange-600 me-2"></i>
                  <span className="text-white-50">
                    123 Event Street, Downtown
                    <br />
                    San Francisco, CA 94103
                  </span>
                </li>
                <li className="d-flex mb-3">
                  <i className="bi bi-telephone text-orange-600 me-2"></i>
                  <span className="text-white-50">+1 (555) 123-4567</span>
                </li>
                <li className="d-flex">
                  <i className="bi bi-envelope text-orange-600 me-2"></i>
                  <span className="text-white-50">hello@eventhub.com</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="fw-bold mb-3">Subscribe</h5>
              <p className="text-white-50">Stay updated with our newsletter</p>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    aria-label="Your Email"
                  />
                  <button
                    className="btn bg-orange-600 text-white"
                    type="button"
                  >
                    <i className="bi bi-send"></i>
                  </button>
                </div>
              </form>
              <div className="mt-3">
                <h6 className="fw-bold">Office Hours</h6>
                <p className="text-white-50 mb-1">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-white-50">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          <hr className="mt-4 mb-4 border-secondary" />

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="text-white-50 small">
              &copy; {new Date().getFullYear()} EventHub. All rights reserved.
            </div>
            <div className="text-white-50 small mt-3 mt-md-0">
              <a href="#" className="text-decoration-none text-white-50 me-3">
                Privacy Policy
              </a>
              <a href="#" className="text-decoration-none text-white-50">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
