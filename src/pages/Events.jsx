import React, { useState, useMemo } from "react";
import CountdownTimer from "../components/CountdownTimer";
import EventCard from "../components/EventCard";
import { events } from "../data/events";

function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendees: 1
  });
  const currentDate = new Date();

  // Get the next upcoming event (first event chronologically)
  //   const nextEvent = [...events].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  const nextEvent = [...events]
    .map((event) => ({
      ...event,
      dateObj: new Date(event.date),
    }))
    .filter((event) => event.dateObj > currentDate)
    .sort((a, b) => a.dateObj - b.dateObj)[0]; // gets the earliest future event
  const nextEventDate = nextEvent ? nextEvent.date : null;
  console.log(nextEvent);
  // Extract categories from events data
  const categories = [
    "all",
    ...new Set(events.map((event) => event.category || "Uncategorized")),
  ];

  // Handle input changes in the registration form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation feedback
    alert("Thank you for registering! You would receive a confirmation email shortly.");
    setShowRegistration(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      attendees: 1
    });
  };

  // Handler for event registration
  const handleEventRegistration = (event) => {
    setSelectedEvent(event);
    setShowRegistration(true);
  };

  // Filter events based on search term and category
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (event.description &&
          event.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory =
        selectedCategory === "all" || event.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Split events into upcoming and past
  const upcomingEvents = filteredEvents.filter(
    (event) => new Date(event.date) >= currentDate
  );
  const pastEvents = filteredEvents.filter(
    (event) => new Date(event.date) < currentDate
  );

  return (
    <>
      <div
        className="position-relative height"
        style={{
          backgroundImage: "linear-gradient(to bottom right,#f97316, #ea580c)",
          overflow: "hidden"
        }}
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center text-white mt-5 mb-5">
                <h1 className="display-4 fw-bold mb-3">
                  Discover Events Near You
                </h1>
                <p className="h5 px-md-5">
                  Find amazing events happening in your area. From tech
                  conferences to music festivals, discover experiences that
                  inspire and connect you with your community.
                </p>
              </div>

              {/* {nextEvent && (
              )} */}
              <CountdownTimer
                targetDate={nextEventDate}
                eventName={nextEvent.name}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search events..."
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-filter"></i>
              </span>
              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
        
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {upcomingEvents.length > 0 && (
          <>
            <div className="mb-4 text-center">
              <h2 className="fw-bold mb-3">Featured Events</h2>
              <div className="text-muted small">
                Don't miss out on these incredible upcoming events
              </div>
            </div>
            <div className="row g-4 mb-5">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="col-md-6 col-lg-4">
                  <EventCard event={event} onRegister={handleEventRegistration} />
                </div>
              ))}
            </div>
          </>
        )}

        {pastEvents.length > 0 && (
          <>
            <div className="mb-4 text-center">
              <h2 className="fw-bold mb-3">Past Events</h2>
              <div className="text-muted small">
                See what amazing events we've hosted recently
              </div>
            </div>
            <div className="row g-4">
              {pastEvents.map((event) => (
                <div key={event.id} className="col-md-6 col-lg-4">
                  <EventCard event={event} isPast={true} />
                </div>
              ))}
            </div>
          </>
        )}

        {filteredEvents.length === 0 && (
          <div className="text-center py-5">
            <h3 className="fs-3 text-secondary mb-3">No events found</h3>
            <p className="text-muted">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}
      </div>
      
      {/* Registration Modal */}
      {showRegistration && selectedEvent && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center p-3" style={{ zIndex: 1050 }}>
          <div className="bg-white rounded p-4 w-100 overflow-auto" style={{ maxWidth: '500px', maxHeight: '90vh' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold text-orange-600 mb-0">Register for {selectedEvent.name}</h5>
              <button className="btn-close" onClick={() => setShowRegistration(false)}></button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label small fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label small fw-semibold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="phone" className="form-label small fw-semibold">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="attendees" className="form-label small fw-semibold">Number of Attendees</label>
                <select
                  className="form-select"
                  id="attendees"
                  name="attendees"
                  value={formData.attendees}
                  onChange={handleInputChange}
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="terms" required />
                <label className="form-check-label small" htmlFor="terms">
                  I agree to the terms and conditions
                </label>
              </div>
              
              <div className="d-flex gap-2 mt-4">
                <button type="submit" className="btn btn-warning flex-grow-1">
                  Complete Registration
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline-secondary" 
                  onClick={() => setShowRegistration(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Events;
