


import React, { useState } from "react";
import Layout from "../Layout/Layout";
import "./Itstartup.css";
import { Link } from "react-router-dom";

const ITstartup = () => {
  const [mentors, setMentors] = useState([]); // State to hold mentor data
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    occupation: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the submitted data to the list of mentors
    setMentors((prevMentors) => [...prevMentors, formData]);
    // Clear form data
    setFormData({
      name: "",
      rating: "",
      occupation: "",
      description: "",
    });
  };
  return (
    <>
      <section id="mentor">
        <div className="container">
          <div className="title-block  text-center">
            <div>
              <h1>
                Succesfull <span className="building-text">Mentor</span>{" "}
                Information
              </h1>
             
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="mentor-box">
                <div className="row personal-info">
                  <div className="col-md-2 col-xs-2">
                    <div className="profile-picture review-one"></div>
                  </div>
                  <div className="col-md-10 col-xs-10">
                    <h6>
                      Joshua M. Salas{" "}
                      <span className="rating">
                        5/5
                        <i className="icon ion-md-star"></i>
                      </span>
                    </h6>
                    <small>
                      Marketing Intelligence | Author & Content Creator
                    </small>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur scelerisque, tortor nec mattis feugiat, velit purus
                  euismod odio, quis vulputate velit urna sit amet enim.
                  Maecenas vulputate auctor ligula sed sollicitudin.
                </p>
                <Link to="/membership">
                  <button className="buttonread">Read More</button>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mentor-box">
                <div className="row personal-info">
                  <div className="col-md-2 col-xs-2">
                    <div className="profile-picture review-one"></div>
                  </div>
                  <div className="col-md-10 col-xs-10">
                    <h6>
                      Michael Edwards{" "}
                      <span className="rating">
                        3/5 <i className="icon ion-md-star"></i>
                      </span>
                    </h6>
                    <small>Seo Consultant | Author & Content Creator</small>
                  </div>
                </div>
                <p>
                  In euismod, metus ac elementum tincidunt, dui eros ullamcorper
                  lorem, at euismod augue augue quis leo. Fusce non dui augue.
                  In hac habitasse platea dictumst. Mauris quis lacinia mauris.
                  Proin ut pretium quam. Nam at ex finibus.
                </p>
                <Link to="/membership">
                  <button className="buttonread">Read More</button>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mentor-box">
                <div className="row personal-info">
                  <div className="col-md-2 col-xs-2">
                    <div className="profile-picture review-one"></div>
                  </div>
                  <div className="col-md-10 col-xs-10">
                    <h6>
                      Rutvik Mangukiya{" "}
                      <span className="rating">
                        5/5 <i className="icon ion-md-star"></i>
                      </span>
                    </h6>
                    <small>Seo Consultant | Author & Content Creator</small>
                  </div>
                </div>
                <p>
                  In euismod, metus ac elementum tincidunt, dui eros ullamcorper
                   lorem, at euismod augue augue quis leo. Fusce non dui augue.
                  In hac habitasse platea dictumst. Mauris quis lacinia mauris.
                  Proin ut pretium quam. Nam at ex finibus.
                </p>
                <Link to="/membership">
                  <button className="buttonread">Read More</button>
                </Link>
              </div>
            </div>
            {mentors.map((mentor, index) => (
              <div className="col-md-4" key={index}>
                <div className="mentor-box">
                  <div className="row personal-info">
                    <div className="col-md-2 col-xs-2">
                      <div className="profile-picture review-one"></div>
                    </div>
                    <div className="col-md-10 col-xs-10">
                      <h6>
                        {mentor.name}{" "}
                        <span className="rating">
                          {mentor.rating}/5 <i className="icon ion-md-star"></i>
                        </span>
                      </h6>
                      <small >{mentor.occupation}</small>
                    </div>
                  </div>
                  <p>{mentor.description}</p>
                </div>
              </div>
            ))}
            {/* Mentor form */}
        
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout()(ITstartup);
{/* <div className="container d-flex justify-content-center align-items-center vh-50">
  <div className="row g-2">
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-12">
          <h1 className="building-text text-decoration-underline sticky-top">WHY NEEV?</h1>
          <div className="text-center">
            {currentSpan === 1 && <h6> Most Trustable.</h6>}
            {currentSpan === 2 && <h6> Most Accurate.</h6>}
            {currentSpan === 3 && <h6>Transparency through investment process.</h6>}
          </div>
        </div><br></br>
      </div>
      <div className="text-center ">
        <button className="fundbtn1 ">
          <h5>I'm A Startup</h5>
        </button>
        <button className="investbtn2 ">
          <h5>I'm An Investor</h5>
        </button>
      </div>{" "}
    </div>
  </div>
</div> */}