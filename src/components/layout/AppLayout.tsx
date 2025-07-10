
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-vault overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 bg-vault relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.05)_0%,transparent_40%),radial-gradient(circle_at_70%_65%,rgba(62,150,244,0.05)_0%,transparent_40%)]"></div>
          <div className="relative z-10">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
