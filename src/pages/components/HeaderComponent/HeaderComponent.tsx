import React from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.scss";
export const HeaderComponent = () => {
  return (
    <header className={`header-area formobile-menu header--transparent black`}>
      <div className="header-wrapper" id="header-wrapper">
        <div className="header-left">
          <div className="logo">{/* <a href="/">{logoUrl}</a> */}</div>
        </div>
        <div className="header-right">
          <nav className="mainmenunav d-lg-block">
            <ul className="mainmenu">
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="header-btn">
            <a
              className="rn-btn"
              href="https://themeforest.net/checkout/from_item/25457315?license=regular"
            >
              <span>buy now</span>
            </a>
          </div>
          {/* Start Humberger Menu  */}
          <div className="humberger-menu d-block d-lg-none pl--20">
            <span onClick={() => {}} className="menutrigger text-white">
              Hola
            </span>
          </div>
          {/* End Humberger Menu  */}
          <div className="close-menu d-block d-lg-none">
            <span onClick={() => {}} className="closeTrigger">
              Hola
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
