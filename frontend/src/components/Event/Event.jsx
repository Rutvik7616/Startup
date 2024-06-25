import React from "react";
import Layout from "../Layout/Layout";
import "../Event/event.css";
const Event = () => {
  const scheduleItems = [
    { time: '09:30 AM', title: 'Registration', speaker: null, description: 'Fugit voluptas iusto maiores temporibus autem numquam magnam.' },
    { time: '10:00 AM', title: 'Keynote', speaker: 'Brenden Legros', image: './Images/event1.jpg', description: 'Facere provident incidunt quos voluptas.' },
    { time: '11:00 AM', title: 'Et voluptatem iusto dicta nobis.', speaker: 'Hubert Hirthe', image: './Images/event2.jpg', description: 'Maiores dignissimos neque qui cum accusantium ut sit sint inventore.' },
    { time: '12:00 AM', title: 'Explicabo et rerum quis et ut ea.', speaker: 'Cole Emmerich', image: './Images/event3.jpg', description: 'Veniam accusantium laborum nihil eos eaque accusantium aspernatur.' },
    { time: '02:00 PM', title: 'Qui non qui vel amet culpa sequi.', speaker: 'Jack Christiansen', image: './Images/event4.jpg', description: 'Nam ex distinctio voluptatem doloremque suscipit iusto.' },
    { time: '03:00 PM', title: 'Quos ratione neque expedita asperiores.', speaker: 'Alejandrin Littel', image: './Images/event4.jpg', description: 'Eligendi quo eveniet est nobis et ad temporibus odio quo.' }
  ];
  return (
    <>
    

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 m-3 roadmap1 ">
          <div className="timeline_event">
      <div className="c-md-2">
        <div className="tl-header">
          <h2>Neev Event Map</h2>
          <div>This Is our Road Map In Which Angel Investor Meet Small Enterpenour</div>
        </div>
        <div className="tl-item"><div className="tl-circle">&nbsp;</div></div>
        <div className="tl-item tl-year-wrap">
          <span className="tl-year-back">&nbsp;</span><span className="tl-year">2024</span>
        </div>
        <div className="tl-item">
          <span className="tl-date">April</span>
          <div className="tl-event">
            <h6>Roadmap Release</h6>
            <h6>New infographics</h6>
          </div>
        </div>
        <div className="tl-item">
          <span className="tl-date">Nov</span>
          <div className="tl-event">
            <h6 className="tl-color">Client Update 'Exotic Spend UI' Release l</h6>
            <h6>Blockchain Fork (stake reward fix)</h6>
          </div>
        </div>
      
        <div className="tl-item">
          <span className="tl-date">Dec</span>
          <div className="tl-event">
            <h6>Christmas Surprise</h6>
          </div>
        </div>
        
        <div className="tl-item"><div className="tl-end">&nbsp;</div></div>
      </div>

      <div className="c-md-2">
        <div className="tl-item tl-year-wrap">
          <span className="tl-year-back">&nbsp;</span><span className="tl-year">2018</span>
        </div>
        <div className="tl-item">
          <span className="tl-date">Q1</span>
          <div className="tl-event">
            <h6>Mobile App Wallet</h6>
            <h6>New Client GUI</h6>
            <h6>Surprise Release</h6>
            <h6 className="tl-color">Release of The Final Smart Contract Templates</h6>
            <h6>Dynamic Peg Test Client Release</h6>
          </div>
        </div>
       
        <div className="tl-item">
          <span className="tl-date">Q3</span>
          <div className="tl-event">
            <h6>Much more to come</h6>
          </div>
        </div>
        <div className="tl-item"><div className="tl-end">&nbsp;</div></div>
        <div className="tl-item"><div className="tl-circle">&nbsp;</div></div>
        <div className="tl-item"><div className="tl-circle">&nbsp;</div></div>
      </div>
    </div>
          </div>
          <div className="col-md-3 register-con">
            <div className="heading">Register for Webinar</div>

            <div className="d-flex justify-content-center align-items-center ">
              <div className="container2 ">
                <div>
                  <form action="" className="form">
                    <input
                      required
                      className="input"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                    <input
                      required
                      className="input"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="E-mail"
                    />
                    <input
                      required
                      className="input"
                      type="text"
                      name="Mobile No."
                      id="Mobile No."
                      placeholder="Mobile No."
                    />
                     <input
                      required
                      className="input"
                      type="text"
                      name="About us"
                      id="About us"
                      placeholder="Tell Me About Your Self"
                    />
                    <select
                      required
                      className="input"
                      name="Register"
                      id="Register"
                    >
                      <option value="">Register As</option>
                      <option value="Investor">Investor</option>
                      <option value="Enterpenour">Enterpenour</option>
                    </select>

                    <input
                      className="login-button"
                      type="submit"
                      value="Register"
                    />
                    
                  </form>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <section id="schedule" className="section-with-bg">
      <div className="container wow fadeInUp">
        <div className="section-header">
          <h1>Event Schedule</h1>
          <p>Here is our event schedule</p>
        </div>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" href="#day-1" role="tab" data-toggle="tab">
              Process
            </a>
          </li>
        </ul>
        <h3 className="sub-heading">
          Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius necessitatibus voluptatem quis labore perspiciatis quia.
        </h3>
        <div className="tab-content row justify-content-center">
          <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">
            {scheduleItems.map((item, index) => (
              <div key={index} className="row schedule-item">
                <div className="col-md-2">
                  <time>{item.time}</time>
                </div>
                <div className="col-md-10">
                  {item.speaker && (
                    <div className="speaker">
                      <img src={item.image} alt={item.speaker} />
                    </div>
                  )}
                  <h4>
                    {item.title} {item.speaker && <span>{item.speaker}</span>}
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>



    </>
  );
};

export default Layout()(Event);
