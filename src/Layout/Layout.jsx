// === src/components/Layout.jsx ===
import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <small>&copy; {new Date().getFullYear()} EventHub. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
