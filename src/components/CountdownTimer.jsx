import React, { useEffect, useState } from 'react';

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center bg-light p-4 rounded">
      <h3 className="fw-bold">Countdown to Next Event</h3>
      <div className="d-flex justify-content-center gap-4 fs-4 mt-3">
        <span>{timeLeft.days || 0}d</span>
        <span>{timeLeft.hours || 0}h</span>
        <span>{timeLeft.minutes || 0}m</span>
        <span>{timeLeft.seconds || 0}s</span>
      </div>
    </div>
  );
}

export default CountdownTimer;
