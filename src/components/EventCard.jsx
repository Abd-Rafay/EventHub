import React from 'react';

function EventCard({ event, isPast = false }) {
  // Format date to display nicely
  const formatDate = (dateStr) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };
  
  // Get category badge color
  const getCategoryColor = () => {
    const categoryColors = {
      'Technology': 'bg-primary',
      'Entertainment': 'bg-success',
      'Business': 'bg-warning',
      'Food': 'bg-danger'
    };
    return categoryColors[event.category] || 'bg-secondary';
  };
  
  return (
    <div className={`card h-100 shadow-sm border-0 ${isPast ? 'bg-light' : ''}`}>
      <div className="card-img-top position-relative" style={{
        height: '120px',
        backgroundColor: '#e67e22',
        backgroundImage: event.image ? `url(${event.image})` : null,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <span className={`badge position-absolute top-0 end-0 m-2 ${getCategoryColor()}`}>
          {event.category}
        </span>
      </div>
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3">{event.name}</h5>
        <div className="d-flex align-items-center mb-2 text-muted">
          <i className="bi bi-calendar me-2"></i>
          <small>{formatDate(event.date)}</small>
        </div>
        <div className="d-flex align-items-center mb-2 text-muted">
          <i className="bi bi-clock me-2"></i>
          <small>{event.time}</small>
        </div>
        <div className="d-flex align-items-center mb-3 text-muted">
          <i className="bi bi-geo-alt me-2"></i>
          <small>{event.location}</small>
        </div>
        <p className="card-text small mb-4">{event.description}</p>
        <button className={`btn ${isPast ? 'btn-secondary disabled' : 'btn-warning'} w-100`}>
          {isPast ? 'Event Ended' : 'Register Now'}
        </button>
      </div>
    </div>
  );
}

export default EventCard;
