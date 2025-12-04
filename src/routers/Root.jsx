import React from 'react';
import { Outlet } from 'react-router';
import './../index.css';
import Navbar from '../components/layout/Navbar';
import MarqueeSlider from '../components/layout/MarqueeSlider';
import Footer from '../components/layout/Footer';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MarqueeSlider />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Root;

