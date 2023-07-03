import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navRef = React.useRef(null);
  function toggleMenu() {
    navRef.current.classList.toggle("open-menu");
  }

  return (
    <>
        
    {/* Sidebar */}
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse z-1 ms-5"
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4 rounded">
        <Link
            to="/user/search"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <span>Search</span>
          </Link>
          <Link
            to="/user/chat"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <span>Chat</span>
          </Link>
          <Link
            to="/user/video"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <span>Videos</span>
          </Link>
          <Link
            to="/user/samples"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <span>Samples</span>
          </Link>
          <Link
            to="/user/settings"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <span>Settings</span>
          </Link>
          <Link
            to="/user/profile"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <span>Profiles</span>
          </Link>
        </div>
      </div>
    </nav>
    {/* Sidebar ends */}
    
    </>
  );
};

export default Sidebar;





