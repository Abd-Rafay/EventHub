import React, { useEffect, useState, useCallback } from 'react';

function CountdownTimer({ targetDate, eventName = "Upcoming Event" }) {
  // Make calculateTimeLeft a useCallback to prevent unnecessary recalculations
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(targetDate) - new Date();
    
    if (difference <= 0) {
      return {};
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Set up the interval
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [calculateTimeLeft]); // Only depend on the function itself, not its result

  // If countdown is finished
  if (Object.keys(timeLeft).length === 0) {
    return (
      <div className="card bg-dark text-white">
        <div className="card-body text-center">
          <h3 className="card-title">Event Started!</h3>
          <h4 className="text-warning">{eventName}</h4>
        </div>
      </div>
    );
  }  return (
    <div className="card border-0" style={{ backgroundColor: "rgba(255, 117, 24, 0.5)" }}>
      <div className="border-0 shadow-sm rounded-3 card-body text-center bg-light bg-opacity-10 p-4">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <i className="bi bi-clock me-3 fs-2 fw-extrabold text-orange-100"></i>
          <h3 className="h2 fw-bold mb-0 text-white">Next Event</h3>
        </div>
        
        <h4 className="fs-4 fw-semibold mb-4 text-orange-100">{eventName}</h4>
        
        <div className="row g-3">
          <div className="col-6 col-md-3">
            <div className="bg-light bg-opacity-10 rounded p-3">
              <div className="fs-2 fw-bold text-white">{timeLeft.days}</div>
              <div className="small text-white">Days</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-light bg-opacity-10 rounded p-3">
              <div className="fs-2 fw-bold text-white">{timeLeft.hours}</div>
              <div className="small text-white">Hours</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-light bg-opacity-10 rounded p-3">
              <div className="fs-2 fw-bold text-white">{timeLeft.minutes}</div>
              <div className="small text-white">Minutes</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-light bg-opacity-10 rounded p-3">
              <div className="fs-2 fw-bold text-white">{timeLeft.seconds}</div>
              <div className="small text-white">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;