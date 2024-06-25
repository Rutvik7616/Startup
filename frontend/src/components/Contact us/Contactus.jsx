import React, { useState } from "react";
import Layout from "../Layout/Layout";
import "./contactus.css";
import axios from "axios"; // Import axios for HTTP requests

const Contactus = () => {
  const [formType, setFormType] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    designation: "",
    organisation: "",
    location: "",
    userType: "", // New field for dropdown
  });

  const handleFormType = (type) => {
    setFormType(type);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/submit", {
        formType,
        formData,
      })
      .then((response) => {
        console.log(response.data);
        alert("Form submitted successfully!");
        setFormData({
          username: "",
          email: "",
          mobile: "",
          designation: "",
          organisation: "",
          location: "",
          userType: "", // New field for dropdown
        });
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 div-container-contactus">
            <div>
              <h1
                style={{
                  textAlign: "center",
                  textDecoration: "underline",
                  textDecorationColor: "#67bb97",
                }}
              >
                <span className="building-text"> Contact us </span>
              </h1>
              <br />
              <br />
              <div className="text-center"></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="button-container">
        <button
          className="custom-button"
          onClick={() => handleFormType("investor")}
        >
          Investor
        </button>
        <button
          className="custom-button"
          onClick={() => handleFormType("startup")}
        >
          Startup
        </button>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="form-container">
              <div className="forms">
                {formType === "startup" && (
                  <div className="startup-form">
                    <div>
                      <div className="heading">Startup Form</div>
                      <form onSubmit={handleSubmit} className="form">
                        <input
                          required
                          className="input"
                          type="text"
                          name="username"
                          id="username"
                          placeholder="Your Name"
                          value={formData.username}
                          onChange={handleChange}
                        />
                        <input
                          required
                          className="input"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your E-mail"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <input
                          required
                          className="input"
                          type="text"
                          name="mobile"
                          id="mobile"
                          placeholder="Your Mobile No."
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                        <input
                          required
                          className="input"
                          type="text"
                          name="designation"
                          id="designation"
                          placeholder="Current Designation"
                          value={formData.designation}
                          onChange={handleChange}
                        />
                        <input
                          required
                          className="input"
                          type="text"
                          name="organisation"
                          id="organisation"
                          placeholder="Organisation"
                          value={formData.organisation}
                          onChange={handleChange}
                        />
                        <input
                          required
                          className="input"
                          type="text"
                          name="location"
                          id="location"
                          placeholder="Location"
                          value={formData.location}
                          onChange={handleChange}
                        />
                         <select
                          required
                          className="input"
                          name="userType"
                          value={formData.userType}
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Select Type
                          </option>
                          <option value="Investor">Investor</option>
                          <option value="Startup">Startup</option>
                        </select>
                        <input
                          className="login-button"
                          type="submit"
                          value="Submit"
                        />
                      </form>
                   
                    </div>
                  </div>
                )}
                {formType === "investor" && (
                  <div className="investor-form">
                    <div>
                      <div className="heading">Investor Form</div>
                      <form onSubmit={handleSubmit} className="form">
                        <input
                          required
                          className="input"
                          type="text"
                          name="username"
                          id="username"
                          placeholder="Your Name"
                          value={formData.username}
                          onChange={handleChange}
                        />
                        <input
                          required
                          className="input"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your E-mail"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <input
                          required
                          className="input"
                          type="text"
                          name="mobile"
                          id="mobile"
                          placeholder="Your Mobile No."
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                        <select
                          required
                          className="input"
                          name="userType"
                          value={formData.userType}
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Select Type
                          </option>
                          <option value="Investor">Investor</option>
                          <option value="Startup">Startup</option>
                        </select>
                        <input
                          required
                          className="input"
                          type="text"
                          name="designation"
                          id="designation"
                          placeholder="Current Designation"
                          value={formData.designation}
                          onChange={handleChange}
                        />
                        <input
                          required
                          className="input"
                          type="text"
                          name="organisation"
                          id="organisation"
                          placeholder="Organisation"
                          value={formData.organisation}
                          onChange={handleChange}
                        />
                        <input
                          required
                          className="input"
                          type="text"
                          name="location"
                          id="location"
                          placeholder="Location"
                          value={formData.location}
                          onChange={handleChange}
                        />
                        <input
                          className="login-button"
                          type="submit"
                          value="Submit"
                        />
                      </form>
                      
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout()(Contactus);
