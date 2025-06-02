import React from 'react';

function Home() {
  return (
    <section className="bg-warning bg-gradient text-white text-center py-5">
      <div className="container">
        <h1 className="display-4 fw-bold">Discover Events Near You</h1>
        <p className="lead mt-3">Stay updated with the latest happenings in your city.</p>
        <a href="/events" className="btn btn-light mt-4 fw-semibold">Browse Events</a>
      </div>
    </section>
  );
}

export default Home;
