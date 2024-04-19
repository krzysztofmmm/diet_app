import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Styles/Layout.css";

function Layout({ children, onNavigate }) {
  return (
    <div className="layout">
      <Navbar onNavigate={onNavigate} />
      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
