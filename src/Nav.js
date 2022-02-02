import React from "react";
import logo from '../src/assets/img/logo_vinilo.jpg'

const Nav = () => {
  return (
    <div className="title">
        <div className="left">
            <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="right">
            <h2>Vinilo</h2>
        </div>    
    </div>
  );
};

export default Nav;
