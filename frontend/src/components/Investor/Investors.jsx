import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import "./Investors.css"
const mentors = [
  { name: "Diverse Network", image: "./Images/handshake.png" ,des:"Spanning across Geographies, Industries & Areas of expertise"},
  { name: "Democratized Angel Investing",  image: "./Images/technical-support.png",des:"Start investing as low as INR 1 Lakh ($1333) per startup"},
  { name: "Convenience", image: "./Images/technology (1).png",des:"End-to-end documentation support & Handholding"},
  
  // { name: "Community Building",  image: "./Images/talent-pool.png" ,des:"Community building and peer to peer problem solving through our Founders Genie Program" },
  // { name: "Speedy Process",  image: "./Images/speedometer.png",des:"Streamlined fundraising process facilitates quicker fundraising, without multiple meetings"},
  // { name: "Startup Growth", image: "./Images/company.png" ,des:"‘VC Showcase’ is organised frequently to help startups grow, through connecting them with VCs"},
];
const Investors = () => {
  return (
    <div>
 <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 div-container1">
              <div>
                <h1 style={{ textAlign: "center" }}>
                We Wealth generation through Angel Investing is a lifelong affair.<br></br>
                <span className="building-text"> Well begun is half done.</span>   
                </h1>
                <br></br>
               <h5 className='text-center'>   Asset Diversification | Knowledge Pooling | Wealth Multiplication |
                         De-risking | New-Age Learning | Mentoring | Nation Building
                </h5>
                <br />
                <div className="text-center">
                  <Link to="/contactus"> 
                  <button className="fundbtn1 ">
                    <h4>Become A Member</h4>
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
      <h1>BENIFITS OF BEING A MEMBER</h1>
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
          
          
         
        </div>
      ))}
    </div>
  </div>
</section>

<div className="container py-5">
  <div className="row">
    <div className="col-md-12 col-lg-12">
      <div id="tracking-pre" />
      <div id="tracking">
        <div className="tracking-list">
          <div className="tracking-item">
            <div className="tracking-icon status-intransit">
              <svg className="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
              </svg>
            </div>
            <div className="tracking-date"></div>
            <div className="tracking-content">Order Placed<span>09 Aug 2021, 10:00am</span></div>
          </div>
          <div className="tracking-item">
            <div className="tracking-icon status-intransit">
              <svg className="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
              </svg>
            </div>
            <div className="tracking-date"></div>
            <div className="tracking-content">Order Confirmed<span>09 Aug 2021, 10:30am</span></div>
          </div>
          <div className="tracking-item">
            <div className="tracking-icon status-intransit">
              <svg className="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
              </svg>
            </div>
            <div className="tracking-date"></div>
            <div className="tracking-content">Packed the product<span>09 Aug 2021, 12:00pm</span></div>
          </div>
          <div className="tracking-item">
            <div className="tracking-icon status-intransit">
              <svg className="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
              </svg>
            </div>
            <div className="tracking-date"></div>
            <div className="tracking-content">Arrived in the warehouse<span>10 Aug 2021, 02:00pm</span></div>
          </div>
          <div className="tracking-item">
            <div className="tracking-icon status-current blinker">
              <svg className="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
              </svg>
            </div>
            <div className="tracking-date"></div>
            <div className="tracking-content">Near by Courier facility<span>10 Aug 2021, 03:00pm</span></div>
          </div>
          <div className="tracking-item-pending">
            <div className="tracking-icon status-intransit">
              <svg className="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
              </svg>
            </div>
            <div className="tracking-date"></div>
            <div className="tracking-content">Out for Delivery<span>12 Aug 2021, 05:00pm</span></div>
          </div>
          <div className="tracking-item-pending">
            <div className="tracking-icon status-intransit">
              <svg className="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
              </svg>
            </div>
            <div className="tracking-date"></div>
            <div className="tracking-content">Delivered<span>12 Aug 2021, 09:00pm</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Layout()(Investors);
