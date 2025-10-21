import React from 'react';
import { Outlet } from 'react-router';
import './../index.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Root;

