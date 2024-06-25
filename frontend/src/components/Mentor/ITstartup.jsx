import React, { useState } from "react";
import Layout from "../Layout/Layout";
import "./Itstartup.css";
// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
import axios from "axios";
import AllBlog from "./AllBlog";
// import Food from "./Food";

const ITstartup = () => {
  // const [message, setMessage] = useState("");
  const [blogData, setblogData] = useState({
    blog_title: "",
    blog_des: "",
    blog_category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setblogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleSubmits = async (e) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/addblog",
        blogData
      );
      console.log(response);
      setblogData({
        blog_title: "",
        blog_des: "",
        blog_category: "",
      });
      alert("Your Data Is Submitted");
    } catch (error) {
      console.error(error);
    }
    e.preventDefault();
  };
  return (
    <>
      <div>
        <h1 className="text-center mt-3">"Create Article Here"</h1>
        <form onSubmit={handleSubmits} className="form">
          <div className="formGroup">
            <label className="label">
              Blog Name:-
              <input
                type="text"
                value={blogData.blog_title}
                onChange={handleInputChange}
                required
                className="input"
                name="blog_title"
              />
            </label>
          </div>
          <div className="formGroup">
            <label className="label">
              Description:-
              <input
                type="text"
                value={blogData.blog_des}
                onChange={handleInputChange}
                require
                className="input"
                name="blog_des"
              />
            </label>
          </div>
          <div className="formGroup">
            <label className="label">
              Category:-
              <input
                type="text"
                value={blogData.blog_category}
                onChange={handleInputChange}
                required
                className="input"
                name="blog_category"
              />
            </label>
          </div>
          <button
            type="submit"
            value={"Add Blog"}
            className="button"
            name="AddBlog"
          >
            Slug Your Blog
          </button>
        </form>
        {/* <p>{message}</p> */}
        
      </div>
      <AllBlog/>
    </>
  );
};

export default Layout()(ITstartup);
