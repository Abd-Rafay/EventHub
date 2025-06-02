import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-white text-center py-5 bg-orange-500">
        <div className="container py-5">
          <h1 className="display-2 fw-bold mb-4">Your Gateway to
Amazing Events</h1>
          <p className="lead mb-5">Discover, connect, and experience the best events in your community. From tech conferences to music festivals, find your next adventure here.</p>
          <Link to="/events" className="btn btn-light px-4 py-2 fw-semibold">Browse Events</Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-4 bg-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4 mb-md-0">
              <h2 className="text-orange-600 fw-bold">50K+</h2>
              <p className="text-muted small">Events Hosted</p>
            </div>
            <div className="col-md-3 col-6 mb-4 mb-md-0">
              <h2 className="text-orange-600 fw-bold">200K+</h2>
              <p className="text-muted small">Happy Attendees</p>
            </div>
            <div className="col-md-3 col-6">
              <h2 className="text-orange-600 fw-bold">500+</h2>
              <p className="text-muted small">Partner Venues</p>
            </div>
            <div className="col-md-3 col-6">
              <h2 className="text-orange-600 fw-bold">50+</h2>
              <p className="text-muted small">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-2">Why Choose EventHub?</h2>
          <p className="text-center text-muted mb-5">
            We're more than just an event platform. We're your partner in discovering
            experiences that enrich your life and connect you with your community.
          </p>          <div className="row">
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="text-center p-4 border rounded shadow-sm h-100 bg-light bg-opacity-25">
                <div className="bg-orange-600 p-3 rounded-circle d-inline-flex justify-content-center align-items-center mb-3" 
                     style={{width: "60px", height: "60px"}}>
                  <i className="bi bi-search fs-4 text-white"></i>
                </div>
                <h5 className="fw-bold">Easy Discovery</h5>
                <p className="text-muted small">
                  Find events that match your interests with our intuitive search and filter system.
                </p>
              </div>
            </div>            <div className="col-md-3 mb-4 mb-md-0">
              <div className="text-center p-4 border rounded shadow-sm h-100 bg-light bg-opacity-25">
                <div className="bg-orange-600 p-3 rounded-circle d-inline-flex justify-content-center align-items-center mb-3" 
                     style={{width: "60px", height: "60px"}}>
                  <i className="bi bi-people fs-4 text-white"></i>
                </div>
                <h5 className="fw-bold">Community Focused</h5>
                <p className="text-muted small">
                  Connect with like-minded people in your local community through shared experiences.
                </p>
              </div>
            </div>            <div className="col-md-3 mb-4 mb-md-0">
              <div className="text-center p-4 border rounded shadow-sm h-100 bg-light bg-opacity-25">
                <div className="bg-orange-600 p-3 rounded-circle d-inline-flex justify-content-center align-items-center mb-3" 
                     style={{width: "60px", height: "60px"}}>
                  <i className="bi bi-star fs-4 text-white"></i>
                </div>
                <h5 className="fw-bold">Quality Events</h5>
                <p className="text-muted small">
                  We curate only the best events to ensure you have memorable experiences every time.
                </p>
              </div>
            </div>            <div className="col-md-3">
              <div className="text-center p-4 border rounded shadow-sm h-100 bg-light bg-opacity-25">
                <div className="bg-orange-600 p-3 rounded-circle d-inline-flex justify-content-center align-items-center mb-3" 
                     style={{width: "60px", height: "60px"}}>
                  <i className="bi bi-geo-alt fs-4 text-white"></i>
                </div>
                <h5 className="fw-bold">Local & Beyond</h5>
                <p className="text-muted small">
                  Discover events in your neighborhood or explore exciting opportunities nearby.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 bg-orange-600 text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Start Exploring?</h2>
          <p className="mb-4">
            Join thousands of event enthusiasts who trust EventHub to discover 
            their next great experience. Your adventure starts here.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/events" className="btn btn-light px-4 py-2">Browse Events Now</Link>
            <Link to="/contact" className="btn btn-outline-light px-4 py-2">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
