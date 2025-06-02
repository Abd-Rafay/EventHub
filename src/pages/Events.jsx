import React, { useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import EventCard from '../components/EventCard';
import { events } from '../data/events';

function Events() {
  const [search, setSearch] = useState('');
  const filtered = events.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));
  const nextEvent = [...events].sort((a, b) => new Date(a.date) - new Date(b.date))[0];

  return (
    <div className="container py-5">
      <CountdownTimer targetDate={nextEvent.date} />

      <div className="my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search events by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h2 className="mb-4 fw-bold">Featured Events</h2>
      <div className="row g-4">
        {filtered.map(event => (
          <div key={event.id} className="col-md-4">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;