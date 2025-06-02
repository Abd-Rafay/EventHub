import React from 'react';

function EventCard({ event }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title fw-bold">{event.name}</h5>
        <p className="card-text text-muted">{event.date} at {event.time}</p>
        <p className="card-text"><strong>Location:</strong> {event.location}</p>
        <p className="card-text">{event.description}</p>
        <button className="btn btn-warning">Register</button>
      </div>
    </div>
  );
}

export default EventCard;
