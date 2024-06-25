import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "../Home/home.css";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    const apiKey = "0e1fe56ac4be41bc8771767bc8a01bde";
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMyNews(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const plansData = [
    { price: "$49", duration: "/ m",teamMembers: "20",buttonText: "Choose plan",},
    { price: "$199", duration: "/ 3m",teamMembers: "50",buttonText: "Choose plan",},
    { price: "$399", duration: "/ 6m",teamMembers: "60",buttonText: "Choose plan",},
    { price: "$399", duration: "/ 6m", teamMembers: "60",buttonText: "Choose plan",},
  ];
  const mentors = [
    { name: "John Wick", image: "./Images/mentorship.png" },
    { name: "John Wick",  image: "./Images/mentorship.png" },
    { name: "Cloud Hosting", image: "./Images/mentorship.png"},
    // { name: "John Wick",  image: "./Images/mentorship.png" },
    // { name: "John Wick",  image: "./Images/mentorship.png"},
    // { name: "John Wick", image: "./Images/mentorship.png" },
  ];

  const events = [
    { image: "./Images/event1.jpg", name: "Flower Bouquet1", Date:"22-02-2022" },
    { image: "./Images/event2.jpg", name: "Flower Bouquet2" , Date:"22-02-2022"},
    { image: "./Images/event3.jpg", name: "Flower Bouquet3", Date:"22-02-2022" },
    { image: "./Images/event4.jpg", name: "Flower Bouquet4" , Date:"22-02-2022"},
    { image: "./Images/event4.jpg", name: "Flower Bouquet5", Date:"22-02-2022" },
    { image: "./Images/event4.jpg", name: "Flower Bouquet6", Date:"22-02-2022" },


  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Sample list of suggestions
  const allSuggestions = ['Rutvik', 'Azad', 'Bulla', 'Abbas', 'Kirtiazad', 'sarikh'];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    const filteredSuggestions = allSuggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  // Function to handle suggestion selection
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSuggestions([]); // Clear suggestions
  };

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 div-container1">
              <div>
                <h1 style={{ textAlign: "center" }}>
                  We're <span className="building-text">Building</span> Software
                  For You.

                 
                </h1>
                <br></br>
                <br></br>
                <p style={{ textAlign: "center" }}>
                  Our team is dedicated to crafting innovative solutions that
                  empower and simplify your digital experience. With a focus on
                  user-centric design and cutting-edge technology, we're
                  committed to delivering products that exceed your
                  expectations.
                </p>{" "}
                <br />
                <div className="text-center">
                  <Link to="/startup"> 
                  <button className="fundbtn1 ">
                    <h4>I'm a Startup</h4>
                  </button>
                  </Link>
                  <Link to="/investor">
                  <button className="investbtn2 ">
                    <h4>I'm a Investor</h4>
                  </button>
                  </Link>
                </div>{" "}
              </div>

              <div></div>
            </div>
            <div className="col-md-3 div-container2">
              <h1 className="text-center1">NEWS</h1>
              <div className="mainDiv">
                {mynews.length > 0 ? (
                  mynews.map((ele, index) => (
                    <div
                      key={index}
                      className="card"
                      style={{
                        marginTop: "2rem",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      }}
                    >
                      <img
                        src={
                          ele.urlToImage == null
                            ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*"
                            : ele.urlToImage
                        }
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {ele.author === "" ? "Janelle Ash" : ele.author}
                        </h5>
                        <p className="card-text">{ele.title}</p>
                        <a
                          href={ele.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-success"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
  className="container-fluid  mb-5 mt-2 wow fadeIn"
  data-wow-delay="0.1s"
  style={{ padding: 35 }}
>
  <div className="container">
    <div className="row g-2">
      <div className="col-md-10">
        <div className="row g-2">
          
          <div className="col-md-4 search-container">
      <input
        type="text"
        className="form-control border-0 py-3"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
      />
     {suggestions.length > 0 && (
        <ul className="suggestions-dropdown">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
          </div>
          <div className="col-md-4">
            <select className="form-select border-0 py-3">
              <option selected="">Funding Type</option>
              <option value={1}>funding 1</option>
              <option value={2}>funding 2</option>
              <option value={3}>funding 3</option>
            </select>
          </div>
          <div className="col-md-4">
            <select className="form-select border-0 py-3">
              <option selected="">Amount</option>
              <option value={1}>10,000</option>
              <option value={2}>20,000</option>
              <option value={3}>30,000</option>
            </select>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <Link to="/funding">        <button className="search_btn border-0 w-100 py-3">Search</button>
</Link>
      </div>
    </div>
  </div>
</div>


        <section id="testimonials">
          <div className="container">
            <div className="title-block  text-center">
              <div>
                {" "}
                <h1>Succesfull  <span className="building-text">Investor</span> Information</h1>
                <p>
                  Industry experts mention their experience using our software
                  and the excellent results they have achieved
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="testimonial-box">
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
                    Curabitur scelerisque, tortor nec mattis feugiat, velit
                    purus euismod odio, quis vulputate velit urna sit amet enim.
                    Maecenas vulputate auctor ligula sed sollicitudin.
                  </p>
                  <Link to="/investors">
                    <button className="buttonread">Read More</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial-box">
                  <div className="row personal-info">
                    <div className="col-md-2 col-xs-2">
                      <div className="profile-picture review-one"></div>
                    </div>
                    <div className="col-md-10 col-xs-10">
                      <h6 className="blurred-text">
                        Michael Edwards{" "}
                        <span className="rating">
                          3/5 <i className="icon ion-md-star"></i>
                        </span>
                      </h6>
                      <small>Seo Consultant | Author & Content Creator</small>
                    </div>
                  </div>
                  <p className="blurred-text">
                    In euismod, metus ac elementum tincidunt, dui eros
                    ullamcorper lorem, at euismod augue augue quis leo. Fusce
                    non dui augue. In hac habitasse platea dictumst. Mauris quis
                    lacinia mauris. Proin ut pretium quam. Nam at ex finibus.
                  </p>
                  <Link to="/investors">
                    <button className="buttonread">Read More</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial-box">
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
                    In euismod, metus ac elementum tincidunt, dui eros
                    ullamcorper lorem, at euismod augue augue quis leo. Fusce
                    non dui augue. In hac habitasse platea dictumst. Mauris quis
                    lacinia mauris. Proin ut pretium quam. Nam at ex finibus.
                  </p>
                  <Link to="/investors">
                    <button className="buttonread">Read More</button>
                  </Link>                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="title-block text-center">
              <h1>Our <span className="building-text">Plans</span></h1>
            </div>
            {plansData.map((plan, index) => (
              <div key={index} className="col-md-3">
                <div className="plan">
                  <div className="inner">
                    <span className="pricing">
                      <span>
                        {plan.price} <small>{plan.duration}</small>
                      </span>
                    </span>
                    <p className="title">Professional</p>
                    <p className="info">
                      This plan is for those who have a team already and running
                      a large business.
                    </p>
                    <ul className="features">
                      <li>
                        <span className="icon">
                          <i className="fa-solid fa-check"></i>
                        </span>
                        <span>
                          <strong>{plan.teamMembers}</strong> team members
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
                      <Link className="button" to="/membership">
                        {plan.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="service_section layout_padding">
          <div className="container">
            <div className="heading_container text-center">
              <h1>Hire <span className="building-text">Mentor</span> For Guide</h1>
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
                        Generators on the Internet tend to repeat predefined
                        chunks as necessary
                      </p>
                      <Link to="/mentor">
                        Hire Us
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="event_section layout_padding">
      <div className="container">
        <div className="heading_container text-center">
          <h1>Past<span className="building-text"> Events</span> Of Neev</h1>
        </div>
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} className="box">
              <div className="img-box">
                <img src={event.image} alt={event.name} />
              </div>
              <div className="detail-box-event">
                <h5>{event.name}</h5><br/>
                {/* <span>{event.Date}</span> */}

              </div>
            </div>
          ))}
        </Slider>
        <div className="btn-box">
          <Link to="/event">Register For Events</Link>
        </div>
      </div>
    </section>
      </div>
    </>
  );
};

export default Layout()(Home);
