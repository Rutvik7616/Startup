import React from "react";
import { Link } from "react-router-dom";
import "../Layout/layout.css"


const Layout = () => (WrappedComponent) => {
  return (props) => {
 
    return (
      <>
       <div>
      
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">
              <img
                src="./Images/logo2.png"
                alt="logo"
                style={{ height: "60px", width: "80px" }}
              />{" "}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/event">
                    Events 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/aboutus">
                  About-us
                  </Link>
                </li>
                <li className="nav-item">
                   <Link className="nav-link active" to="/startup">
                  StartUps  
                 </Link>
                </li>
                <li className="nav-item">
                   <Link className="nav-link active" to="/portfolio">
                  Portfolio  
                 </Link>
                </li>
                <li className="nav-item">
                   <Link className="nav-link active" to="/investors">
                  Investors  
                 </Link>
                </li>
                <li className="nav-item">
                   <Link className="nav-link active" to="/membership">
                  Membership  
                 </Link>
                </li>

                <li className="nav-item">
                   <Link className="nav-link active" to="/Funding">
                  Funding  
                 </Link>
                </li>

                <li className="nav-item">
                   <Link className="nav-link active" to="/mentor">
                  Hire Mentor Startup  
                 </Link>
                </li>
                <Link to="/contactus">        
                 <button className="btn btn-success ml-4">Contact us</button>
           </Link>
           <Link to="/login">        
                 <button className="btn btn-success ml-4">LogOut</button>
           </Link>
             </ul>
              
             
            </div>
           
          </div>
        </nav>


       </div>
       <WrappedComponent {...props} /> 
                
        <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Address</h5>
            <p className="mb-2">- 1326,Dev atlier,Anandnagar,Ahemdabad</p>
            <p className="mb-2">- +91 8596748596</p>
            <p className="mb-2">- nexacoretechnologies.in</p>
           
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Services</h5>
            <a className="btn btn-link" href="/">Provide Fund</a>
            <a className="btn btn-link" href="/">Bussiness Guide</a>
            <a className="btn btn-link" href="/">Provide Mentor</a>
            <a className="btn btn-link" href="/">Event Managment</a>
            <a className="btn btn-link" href="/">Provide Angel Investor</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>
            <a className="btn btn-link" href="/">About Us</a>
            <a className="btn btn-link" href="/">Contact Us</a>
            <a className="btn btn-link" href="/">Our Services</a>
            <a className="btn btn-link" href="/">Terms & Condition</a>
            <a className="btn btn-link" href="/">Support</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Contact Here</h5>
            <p>For Any Query Regarding Neev Contact Here. You Will Get Reply Soon.....</p>
            <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
              <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-success py-2 position-absolute top-0 end-0 mt-2 me-2">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
             <a className="border-bottom" href="/home">Neev</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <a className="border-bottom" href=" https://nexacoretechnologies.in/ ">@Nexacore Technologies</a>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
    );
  };
};

export default Layout;
