import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-md" style={{ backgroundColor: "#FF6F00" }}>
      <div className="container">
        <NavLink className="navbar-brand fw-bold d-flex align-items-center text-white" to="/">
          <i className="bi bi-calendar-event me-2"></i>
          EventHub
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => 
                  isActive ? "nav-link text-white px-3 py-2 rounded" : "nav-link text-white"
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
                  isActive ? "nav-link text-white px-3 py-2 rounded" : "nav-link text-white"
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
                  isActive ? "nav-link text-white px-3 py-2 rounded" : "nav-link text-white"
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
    </nav>
  );
}

export default Header;
