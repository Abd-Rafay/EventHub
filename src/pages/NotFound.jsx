import React from 'react';

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-4">404</h1>
      <p className="lead">Page Not Found</p>
      <a href="/" className="btn btn-warning">Go Home</a>
    </div>
  );
}

export default NotFound;
