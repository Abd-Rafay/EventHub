import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add actual form submission logic here
    alert('Message sent! We\'ll get back to you soon.');
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold mb-3">Get in Touch</h1>
          <p className="lead">
            Have questions about events? Want to partner with us? We'd love to 
            hear from you!
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {/* Email */}
            <div className="col-md-4">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body text-center p-4">
                  <div className="bg-orange-600 p-3 rounded-circle d-inline-flex justify-content-center align-items-center mb-3" 
                      style={{width: "60px", height: "60px"}}>
                    <i className="bi bi-envelope fs-4 text-white"></i>
                  </div>
                  <h5 className="fw-bold">Email Us</h5>
                  <p className="mb-1"><a href="mailto:hello@eventhub.com" className="text-decoration-none text-orange-600">hello@eventhub.com</a></p>
                  <small className="text-muted">Send us an email any time!</small>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="col-md-4">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body text-center p-4">
                  <div className="bg-orange-600 p-3 rounded-circle d-inline-flex justify-content-center align-items-center mb-3" 
                      style={{width: "60px", height: "60px"}}>
                    <i className="bi bi-telephone fs-4 text-white"></i>
                  </div>
                  <h5 className="fw-bold">Call Us</h5>
                  <p className="mb-1"><a href="tel:+15551234567" className="text-decoration-none text-orange-600">+1 (555) 123-4567</a></p>
                  <small className="text-muted">Mon-Fri, 9 AM - 5 PM EST</small>
                </div>
              </div>
            </div>

            {/* Visit */}
            <div className="col-md-4">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body text-center p-4">
                  <div className="bg-orange-600 p-3 rounded-circle d-inline-flex justify-content-center align-items-center mb-3" 
                      style={{width: "60px", height: "60px"}}>
                    <i className="bi bi-geo-alt fs-4 text-white"></i>
                  </div>
                  <h5 className="fw-bold">Visit Us</h5>
                  <p className="mb-1">123 Event Street, Downtown</p>
                  <small className="text-muted">San Francisco, CA 94103</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Form */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="d-flex align-items-center mb-4">
                <i className="bi bi-envelope-paper text-orange-600 me-2 fs-4"></i>
                <h2 className="h4 fw-bold mb-0">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="fullName" className="form-label small text-muted">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control"
                      id="fullName" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label small text-muted">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required 
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label small text-muted">Subject</label>
                  <div className="input-group">
                    <select 
                      className="form-select" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Event Registration">Event Registration</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Support">Support</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="form-label small text-muted">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-orange-600 bg-orange-600 text-white px-4 py-2">
                  <i className="bi bi-send me-2"></i>Send Message
                </button>
              </form>
            </div>
            
            {/* FAQ */}
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-4">
                <i className="bi bi-question-circle text-orange-600 me-2 fs-4"></i>
                <h2 className="h4 fw-bold mb-0">Frequently Asked Questions</h2>
              </div>
              
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      How do I register for an event?
                    </button>
                  </h3>
                  <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Simply browse our events page. Find an event you're interested in, and click the "Register Now" button. You'll be guided through the registration process.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      Can I get a refund if I can't attend?
                    </button>
                  </h3>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Refund policies vary by event. Please check the specific event details or contact the event organizer directly for refund information.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      How do I submit my own event?
                    </button>
                  </h3>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We'd love to feature your event! Please contact us with your event details, and we'll get back to you with the next steps for submission and review.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 shadow-sm">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      Do you offer group discounts?
                    </button>
                  </h3>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, for many group bookings! Contact us with your group size and event interests, and we'll connect you with the appropriate organizers.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;