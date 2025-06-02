import React from 'react';

function Home() {
  return (
    <section className="text-white text-center py-5" style={{ backgroundColor: "#FCBA04" }}>
      <div className="container py-5">
        <h1 className="display-2 fw-bold mb-4">Discover Events Near You</h1>
        <p className="lead mb-5">Stay updated with the latest happenings in your city.</p>
        <a href="/events" className="btn btn-light px-4 py-2 fw-semibold">Browse Events</a>
      </div>
    </section>
  );
}

export default Home;
