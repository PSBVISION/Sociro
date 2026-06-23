import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Mobile menu button */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      <div className="flex-1 p-4">
        {/* Top Bar */}
        <header>
        </header>
          <main><Outlet/></main>
      </div>
    </div>
  );
};

export default Layout;
