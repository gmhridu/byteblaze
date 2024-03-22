import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Bookmarks from '../pages/Bookmarks';
import Footer from '../components/Footer/Footer';


const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar />
      </div>

      <div className='min-h-[calc(100vh-116px)]'>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;