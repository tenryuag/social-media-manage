import React from "react";

const Header = ({ children }) => {
  return(
    <nav className="navbar navbar-light bg-light">
      <div>
        <img src="logo192.png" width={32} height={32} className="d-line-block align-top mr-sm-2" alt="Logo" />
        <a className="navbar-brand" href="/">Facebook Login</a>
      </div>
      {children}
    </nav>
  );
};

export default Header;
