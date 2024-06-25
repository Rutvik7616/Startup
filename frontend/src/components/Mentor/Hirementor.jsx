import React, { useState } from "react";
import Layout from "../Layout/Layout";
import "./hirementor.css";
import { Link } from "react-router-dom";

const Hirementor = () => {
  const [activeCategory, setActiveCategory] = useState("techstartup");

  const handleThumbClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <div>
        <div className="popular-categories">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h1>Popular Categories</h1>
                  <h6>Check Them Out</h6>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="naccs">
                  <div className="grid">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="menu">
                          <div
                            className={`first-thumb ${
                              activeCategory === "techstartup" ? "active" : ""
                            }`}
                            onClick={() => handleThumbClick("techstartup")}
                          >
                            <div className="thumb">
                              <span className="icon">
                                <img
                                  src="./Images/technology.png"
                                  alt="k"
                                />
                              </span>
                              Technology Startup
                            </div>
                          </div>

                          <div
                            className={`thumb ${
                              activeCategory === "biotech" ? "active" : ""
                            }`}
                            onClick={() => handleThumbClick("biotech")}
                          >
                            <div className="thumb">
                              <span className="icon">
                                <img
                                  src="./Images/biotechnology.png"
                                  alt="df"
                                />
                              </span>
                              Biotech & Science
                            </div>
                          </div>
                         
                          <div
                            className={`last-thumb ${
                              activeCategory === "traveling" ? "active" : ""
                            }`}
                            onClick={() => handleThumbClick("traveling")}
                          >
                            <div className="thumb">
                              <span className="icon">
                                <img
                                 src="./Images/luggage.png"

                                  alt="j"
                                />
                              </span>
                              Travel & Hospitality
                            </div>
                          </div>

                          <div
                            className={`last-thumb ${
                              activeCategory === "ecommerce" ? "active" : ""
                            }`}
                            onClick={() => handleThumbClick("ecommerce")}
                          >
                            <div className="thumb">
                              <span className="icon">
                                <img
                                  src="./Images/online-store.png"
                                  alt="j"
                                />
                              </span>
                              E-Commerce & Retail
                            </div>
                          </div>

                          <div
                            className={`last-thumb ${
                              activeCategory === "Food" ? "active" : ""
                            }`}
                            onClick={() => handleThumbClick("Food")}
                          >
                            <div className="thumb">
                              <span className="icon">
                                <img
                                  src="./Images/smart-factory.png"
                                  alt="j"
                                />
                              </span>
                              Food And Agriculture
                            </div>
                          </div>

                          

                        </div>
                      </div>
                      <div className="col-lg-9 align-self-center">
                        <ul className="nacc">
                          {activeCategory === "techstartup" && (
                            <li className="active">
                              <div>
                                <div className="thumb">
                                  <div className="row">
                                    <div className="col-lg-5 align-self-center">
                                      <div className="left-text">
                                        <h4>
                                        Technology (Tech) Startups:
                                        </h4>
                                        <p>
                                         This sector encompasses startups that develop s
                                        oftware, mobile applications, artificial intelligence (AI), machine learning (ML), cybersecurity, cloud computing, and other technology-driven products or services. Examples include software-as-a-service (SaaS) companies, fintech startups, health tech companies, and e-commerce platforms.
                                        </p>
                                        <div className="main-white-button">
                                          <Link to="/Itstartup"> 
                                           <button className="btn btn-success">
                                          Hire Mentor
                                         </button></Link>
                                        
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-7 align-self-center">
                                      <div className="right-image">
                                        <img src="./Images/It mentor.jpg" alt="df" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          )}
                          {activeCategory === "biotech" && (
                            <li className="active">
                              <div>
                                <div className="thumb">
                                  <div className="row">
                                    <div className="col-lg-5 align-self-center">
                                      <div className="left-text">
                                        <h4>Biotechnology (Biotech) and Life Sciences</h4>
                                        <p>
                                        Biotech startups focus on developing new pharmaceuticals,
                                        
                                         medical devices, diagnostics, and therapies to address healthcare challenges. These startups often leverage advancements in genomics, personalized medicine, and biotechnology to 
                                        innovate in areas such as cancer treatment, genetic testing, and regenerative medicine.
                                        </p>
                                        <div className="main-white-button">
                                          <Link to='/biotech'>
                                          <button className="btn btn-success">
                                          Hire Mentor
                                         </button></Link>
                                        
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-7 align-self-center">
                                      <div className="right-image">
                                        <img src="./Images/biotech.jpg" alt="biotech" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          )}
                          {activeCategory === "traveling" && (
                            <li className="active">
                              <div>
                                <div className="thumb">
                                  <div className="row">
                                    <div className="col-lg-5 align-self-center">
                                      <div className="left-text">
                                        <h4> Travel and Hospitality</h4>
                                        <p>
                                        Startups in the travel and hospitality sector innovate in areas
                                         such as online travel booking, accommodation sharing, transportation, tourism experiences,
                                          and hospitality services. Examples include online travel agencies 
                                        (OTAs), vacation rental platforms, and travel itinerary planners.
                                        </p>
                                        <div className="main-white-button">
                                        <Link to='/travel'>
                                          <button className="btn btn-success">
                                          Hire Mentor
                                         </button></Link>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-7 align-self-center">
                                      <div className="right-image">
                                        <img src="./Images/travel3.jpg" alt="Travel" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          )}
                          {activeCategory === "ecommerce" && (
                            <li className="active">
                              <div>
                                <div className="thumb">
                                  <div className="row">
                                    <div className="col-lg-5 align-self-center">
                                      <div className="left-text">
                                        <h4>E-commerrce And Retail...</h4>
                                        <p>
                                        E-commerce startups operate online platforms for selling products and services directly to consumers or 
                                        
                                        businesses. These startups may focus on niche markets, specialized products, or unique customer experiences.
                                         Additionally, retail startups may innovate in areas such as 
                                        supply chain management, logistics, and omnichannel retailing.
                                        </p>
                                        <div className="main-white-button">
                                        <Link to='/ecommerce'>
                                          <button className="btn btn-success">
                                          Hire Mentor
                                         </button></Link>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-7 align-self-center">
                                      <div className="right-image">
                                        <img src="./Images/ecommerce.jpg" alt="ecommerce" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          )}
                          {activeCategory === "Food" && (
                            <li className="active">
                              <div>
                                <div className="thumb">
                                  <div className="row">
                                    <div className="col-lg-5 align-self-center">
                                      <div className="left-text">
                                        <h4>Food and Agriculture..</h4>
                                        <p>
                                        Startups in the food and agriculture sector aim to improve food production, 
                                        
                                        distribution, and sustainability. This includes agritech startups developing precision agriculture 
                                        technologies, foodtech companies creating alternative proteins or
                                         plant-based foods, and food delivery platforms.
                                        </p>
                                        <div className="main-white-button">
                                        <Link to='/food'>
                                          <button className="btn btn-success">
                                          Hire Mentor
                                         </button></Link>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-7 align-self-center">
                                      <div className="right-image">
                                        <img src="./Images/food.jpg" alt="food" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          )}
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout()(Hirementor);
