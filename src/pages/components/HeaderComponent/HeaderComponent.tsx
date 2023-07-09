import React from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.scss";
import logoUrl from "../../../assets/images/logo/rbit-logo.jpg";

export const HeaderComponent = () => {
  return (
    <header
      className={`header-area formobile-menu header--transparent default-color`}
    >
      <div className="header-wrapper" id="header-wrapper">
        <div className="header-left">
          <div className="logo" style={{ width: "100px" }}>
            <img src={logoUrl} />
          </div>
        </div>
        <div className="header-right">
          <nav className="mainmenunav d-lg-block">
            <ul className="mainmenu">
              <li>
                <Link to="/contact">Servicios</Link>
              </li>
              <li>
                <Link to="/contact">Nosotros</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </nav>
          <div className="header-btn">
            <a
              className="rn-btn"
              href="https://themeforest.net/checkout/from_item/25457315?license=regular"
            >
              <span>Tienda</span>
            </a>
          </div>
          {/* Start Humberger Menu  */}
          {/* <div className="humberger-menu d-block d-lg-none pl--20">
            <span onClick={() => {}} className="menutrigger text-white">
              Holaaa
            </span>
          </div> */}
          {/* End Humberger Menu  */}
          {/* <div className="close-menu d-block d-lg-none">
            <span onClick={() => {}} className="closeTrigger">
              Holaaa
            </span>
          </div> */}
        </div>
      </div>
    </header>
  );
};
