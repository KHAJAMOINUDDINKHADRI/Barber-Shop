import React from "react";
import Navbar from "./Navbar";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-barbershop-dark text-white font-sans">
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
