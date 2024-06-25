import React, { useState } from "react";
import Layout from "../Layout/Layout";
import "../membership/membership.css";
import { Link } from "react-router-dom";


const Membership = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormOpen2, setIsFormOpen2] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };
  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  const handleOpenForm2 = () => {
    setIsFormOpen2(true);
  };

  const handleCloseForm2 = () => {
    setIsFormOpen2(false);
  };
 
 
 

  const inputFields = [
    {
      label:
        "Tell Us About Yourself(Make it interesting & relavant to what you are doing now)",
      placeholder: "Information",
    },
    {
      label: "Where Did You Start This?",
      placeholder: "Initallization of your Bussiness",
    },
    {
      label:
        "How Large Is Your Market Opportunity?(Note this is not category size but addressable market today)",
      placeholder: "",
    },
    {
      label: "What is different about your product/USP?",
      placeholder: "",
    },
    {
      label: "What is the consumer need or desire that you are doing/solving?",
      placeholder: "",
    },
    {
      label: "Why did you name your company or product ABC?",
      placeholder: "",
    },
    {
      label:
        "Who is your target customer? (Describe them as people eg. where they,live what they do? Why and how they discover you?)",
      placeholder: "",
    },
    {
      label:
        "Who are the competitors?(Know names and numbers-if it an estimate like 50) Why Will You Win?",
      placeholder: "",
    },
    {
      label:
        "Who are you priced?(Have Ready comparisons with other products in the market)",
      placeholder: "",
    },
    {
      label: "What is your MOAT? What are the trends shaping your Category?",
      placeholder: "",
    },
    {
      label:
        "Tell us About your team.(How Many? What Roles? Background & Details of Co-founder)",
      placeholder: "",
    },
    {
      label:
        "If Co-founder then how do you divide roles and resolve conflict when it arise?(Be authentic)",
      placeholder: "",
    },
    {
      label:
        "About Your business-product portfolio, product formulation, packaging design, hero products,channel wise revenue for last 3 fiscals,3 months and more if you can remember!",
      placeholder: "",
    },
    {
      label:
        "If Co-founder then how do you divide roles and resolve conflict when it arise?(Be authentic)",
      placeholder: "",
    },
  ];

  const inputFields2 = [
    {
      label:
        "Economics-gross margin, AOV, CAC, Contribution margin 1 & 2, performance marketing, overheads, EBITDA, cash burn on average, for last 3 months and last fiscal. When will you be profitable and how? (work the above in percentage and actual Rs. basis year AOV)",
      placeholder: "Information",
    },
    {
      label:
        "Retention-what you do? Tools you use? Repeat rates, retention collaborates for a few months prior.",
      placeholder: "Initallization of your Business",
    },
    {
      label:
        "Money raised, money burnt, capitalization table, names of key investors if any.",
      placeholder: "",
    },
    {
      label:
        "What salary you draw? What money you have personally invested in the business?",
      placeholder: "",
    },
    {
      label:
        "What are your plans for the business in the next 1, 3, and 5 years?",
      placeholder: "",
    },
    {
      label:
        "Why have you come on Angelshine? Who are your dream investors? Why?",
      placeholder: "",
    },
    {
      label: "Why you raise the money how will you spend it?",
      placeholder: "",
    },
    {
      label:
        "What is your biggest challenge personally and professionally & can the investor help?",
      placeholder: "",
    },
  ];
  return (
    <>
    <div>
      <div className="back">
        <div>
          <div className="survey-container">
            <h3 className="text-center">Tell Me About Your Self</h3>
            <div>
              <div className="button-container">
                <button onClick={handleOpenForm} className="open">
                  {" "}
                  Open Form
                </button>
                <button onClick={handleCloseForm} className="close">
                  {" "}
                  Close Form
                </button>
              </div>
            </div>
          </div>

          {!isFormOpen && <div className="text-center"></div>}
          {isFormOpen && (
            <form className="survey-form">
              <div className="input-headings">
                {inputFields.map((field, index) => (
                  <div key={index}>
                    <label className="number-label">{field.label}</label>
                    <input
                      type="text"
                      className="forms-inputs"
                      required
                      placeholder={field.placeholder}
                    />
                    <br />
                  </div>
                ))}
                <input
                  type="submit"
                  id="submit"
                  className="submit-button-membership"
                />
              </div>
            </form>
          )}
        </div>
{/* -------------------------------------------------------------------------------- */}
        <div>
          <div className="survey-container2">
            <h3 className="text-center">Tell Me About Your Bussiness</h3>
            <div>
              <div className="button-container2">
                <button onClick={handleOpenForm2} className="open">
                  {" "}
                  Open Form
                </button>
                <button onClick={handleCloseForm2} className="close">
                  {" "}
                  Close Form
                </button>
              </div>
            </div>
          </div>
          {!isFormOpen2 && <div className="text-center"></div>}
          {isFormOpen2 && (
            <form className="survey-form">
              <div className="input-headings">
                {inputFields2.map((field, index) => (
                  <div key={index}>
                    <label className="number-label">{field.label}</label>
                    <input
                      type="text"
                      className="forms-inputs"
                      required
                      placeholder={field.placeholder}
                    />
                    <br />
                  </div>
                ))}
                <input
                  type="submit"
                  id="submit"
                  className="submit-button-membership"
                />
              </div>
            </form>
          )}
        </div>
      </div>

{/* -------------------------------------------------------------------------------- */}
      <div className="container">
        <div className="row">
          <div className="title-block  text-center">
            <h1 className="font-weight-bold">Our Plans</h1>
          </div>
          <div class="col-md-3">
            <div className="plan">
              <div className="inner">
                <span className="pricing">
                  <span>
                    $49 <small>/ m</small>
                  </span>
                </span>
                <p className="title">Professional</p>
                <p className="info">
                  This plan is for those who have a team already and running a
                  large business.
                </p>
                <ul className="features">
                  <li>
                    <span className="icon">
                      <i class="fa-solid fa-check"></i>
                    </span>
                    <span>
                      <strong>20</strong> team members
                    </span>
                  </li>
                  <li>
                    <span className="icon">
                      <i class="fa-solid fa-check"></i>
                    </span>

                    <span>
                      Plan <strong>team meetings</strong>
                    </span>
                  </li>
                  <li>
                    <span className="icon"></span>
                    <span>File sharing</span>
                  </li>
                </ul>
                <div className="action">
                  <Link className="button" to="/membership ">
                    Choose plan
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div className="plan">
              <div className="inner">
                <span className="pricing">
                  <span>
                    $199 <small>/ 3m</small>
                  </span>
                </span>
                <p className="title">Professional</p>
                <p className="info">
                  This plan is for those who have a team already and running a
                  large business.
                </p>
                <ul className="features">
                  <li>
                    <span className="icon"></span>
                    <span>
                      <strong>50</strong> team members
                    </span>
                  </li>
                  <li>
                    <span className="icon"></span>
                    <span>
                      Plan <strong>team meetings</strong>
                    </span>
                  </li>
                  <li>
                    <span className="icon"></span>
                    <span>File sharing</span>
                  </li>
                </ul>
                <div className="action">
                  <Link className="button" to="/membership ">
                    Choose plan
                  </Link>
                </div>
              </div>
            </div>{" "}
          </div>
          <div class="col-md-3">
            <div className="plan">
              <div className="inner">
                <span className="pricing">
                  <span>
                    $399 <small>/ 6m</small>
                  </span>
                </span>
                <p className="title">Professional</p>
                <p className="info">
                  This plan is for those who have a team already and running a
                  large business.
                </p>
                <ul className="features">
                  <li>
                    <span className="icon"></span>
                    <span>
                      <strong>60</strong> team members
                    </span>
                  </li>
                  <li>
                    <span className="icon"></span>
                    <span>
                      Plan <strong>team meetings</strong>
                    </span>
                  </li>
                  <li>
                    <span className="icon"></span>
                    <span>File sharing</span>
                  </li>
                </ul>
                <div className="action">
                  <Link className="button" to="/membership ">
                    Choose plan
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div className="plan">
              <div className="inner">
                <span className="pricing">
                  <span>
                    $399 <small>/ 6m</small>
                  </span>
                </span>
                <p className="title">Professional</p>
                <p className="info">
                  This plan is for those who have a team already and running a
                  large business.
                </p>
                <ul className="features">
                  <li>
                    <span className="icon"></span>
                    <span>
                      <strong>60</strong> team members
                    </span>
                  </li>
                  <li>
                    <span className="icon"></span>
                    <span>
                      Plan <strong>team meetings</strong>
                    </span>
                  </li>
                  <li>
                    <span className="icon"></span>
                    <span>File sharing</span>
                  </li>
                </ul>
                <div className="action">
                  <Link className="button" to="/membership ">
                    Choose plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div>
     
      </div>
      </div>
    </>
  );
};

export default Layout()(Membership);
