import React from "react";
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent";
import "./HomePage.scss";
import hola from "../../assets/images/icons/icon-01.png";
export const HomePage = () => {
  const ServiceList = [
    {
      icon: "01",
      title: "Business Stratagy",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      icon: "02",
      title: "Website Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      icon: "03",
      title: "Marketing & Reporting",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
  ];
  return (
    <div className="slider-wrapper">
      <div className="slider-activation">
        {/* Start Single Slide */}
        <div
          className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
          data-black-overlay="6"
        >
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <h1 className="title theme-gradient">
                    Solucionamos tus problemas informaticos
                  </h1>
                </div>
              </div>
            </div>
            {/* Start Service Area */}
            <div className="service-wrapper service-white">
              <React.Fragment>
                <div className="row">
                  {ServiceList.map((val, i) => (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                      <div className="service service__style--1">
                        <div className="icon">
                          <img
                            // src={`../../assets/images/icons/icon-${val.icon}.png`}
                            src={hola}
                            alt="Digital Agency"
                          />
                        </div>
                        <div className="content">
                          <h4 className="title">{val.title}</h4>
                          {/* <h4 className="title">{val.title}</h4> */}
                          <p>{val.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </React.Fragment>
            </div>
            {/* End Service Area */}
          </div>
        </div>
        {/* End Single Slide */}
      </div>
    </div>
  );
};
