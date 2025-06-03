import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar navbar-expand-md shadow-sm" style={{ backgroundImage: "linear-gradient(to bottom right,#f97316, #ea580c)", position: "sticky", top: 0, zIndex: 1000 }}>
      <div className="container py-2">
        <NavLink className="navbar-brand d-flex align-items-center text-white" to="/">
          <div className="me-2 fs-3">
            <i className="bi bi-calendar-event"></i>
          </div>
          <span className="fw-bold fs-4">EventHub</span>
        </NavLink>
        
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => 
                  isActive ? "nav-link text-white px-4 py-2 rounded" : "nav-link text-white px-4"
                }
                style={({isActive}) => 
                  isActive ? {backgroundColor: "rgba(255, 255, 255, 0.2)"} : {}
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => 
                  isActive ? "nav-link text-white px-4 py-2 rounded" : "nav-link text-white px-4"
                }
                style={({isActive}) => 
                  isActive ? {backgroundColor: "rgba(255, 255, 255, 0.2)"} : {}
                }
                to="/events"
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => 
                  isActive ? "nav-link text-white px-4 py-2 rounded bg-white bg-opacity-25" : "nav-link text-white px-4"
                }
                style={({isActive}) => 
                  isActive ? {backgroundColor: "rgba(255, 255, 255, 0.2)"} : {}
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
