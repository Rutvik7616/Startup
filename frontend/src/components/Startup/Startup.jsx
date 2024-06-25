import React,{useState} from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import './startup.css'
const Startup = () => {
  const mentors = [
    { name: "Mentoring", image: "./Images/handshake.png" ,des:"Startups not only get a cheque, but also mentoring support through initiatives like ‘Expert Panel’"},
    { name: "Digitised Processes",  image: "./Images/technical-support.png",des:"A Single Point of Contact is provided to the Startup to help with digitised processes"},
    { name: "Technology Support", image: "./Images/technology (1).png",des:"AWS credits and other technological support are given to all Neev funded startups"},
    
    { name: "Community Building",  image: "./Images/talent-pool.png" ,des:"Community building and peer to peer problem solving through our Founders Genie Program" },
    { name: "Speedy Process",  image: "./Images/speedometer.png",des:"Streamlined fundraising process facilitates quicker fundraising, without multiple meetings"},
    { name: "Startup Growth", image: "./Images/company.png" ,des:"‘VC Showcase’ is organised frequently to help startups grow, through connecting them with VCs"},
  ];

 
  
  return (
    <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 div-container1">
              <div>
                <h1 style={{ textAlign: "center" }}>
                We <span className="building-text">  Invest </span> first in the Founder, later in the <span className="building-text"> Startup. </span>   
                </h1>
                <br></br>
               <h5 className='text-center'>      Leaders | Visionaries | Creators | Disruptors | Problem Solvers | Executors | Experimentalists
                </h5>
                <br />
                <div className="text-center">
                  <Link to="/contactus"> 
                  <button className="fundbtn1 ">
                    <h4>Apply For Funding</h4>
                  </button>
                  </Link>
                  
                </div>
              </div>

              <div></div>
            </div>
           
          </div>
        </div>
        <section className="startup_section layout_padding">
  <div className="container">
    <div className="heading_container text-center">
      <h1>Benefits Of Startup</h1>
    </div>
  </div>
  <div className="container">
    <div className="row">
      {mentors.map((mentor, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="box">
            <div className="img-box">
              <img src={mentor.image} alt={mentor.name} />
            </div>
            <div className="detail-box">
              <h4>{mentor.name}</h4>
              <p>
                {mentor.des}
              
              </p>
             
            </div>
          </div>
          
          {/* {index === 2 && (
  <div className="center-container">
    <img 
      src="./Images/startuppic.jpg" 
      alt="Additional Mentor"   
      className="img-fluid mx-auto d-flex mt-2"
      style={{ width: "200px", height: "200px"}}
    />
  </div>
)} */}
         
        </div>
      ))}
    </div>
  </div>
</section>


  


  
    </div>
  )
}

export default Layout()(Startup);
