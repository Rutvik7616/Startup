
import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import './Funding.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Funding = () => {
  // Settings for React Slick slider   
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [showForm, setShowForm] = useState(false);

  // State to manage visibility of additional content for each section
  const [showDetails, setShowDetails] = useState([false, false, false]); 
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [purpose, setPurpose] = useState('');
  const [originalPurpose, setOriginalPurpose] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };
  const handleCancelPurpose = () => {
    setPurpose(originalPurpose);
  };
  const handlePurposeChange = (event) => {
    setPurpose(event.target.value);
  };


  // Function to toggle  section
  const toggleDetails = (index) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  // Array of objects containing details for each section
  const sections = [
    { heading: "Series A", description: "Once a startup makes it through the seed stage and they have some kind of traction — whether it’s number of users, revenue, performance indicator (KPI) — they’re ready to raise a Series A round.The typical valuation for a company raising a seed round is $10 million to $15 million.", additionalDetails: "Series A funding usually comes from venture capital firms, although angel investors may also be involved. Additionally, more companies are using equity crowdfunding for their Series A.Series A is a point at which many startups tend to fail. In a phenomenon known as “Series A crunch,” even startups that are successful with their seed round often have trouble securing a Series A round."},
    { heading: "Series B", description: "A startup that reaches the point where they’re ready to raise a Series B round has already found their product/market fit and needs help expanding.The big question here is: Can you make your company work at scale? Can you go from 100 users to a 1,000? How about 1 million? ", additionalDetails: "Series B funding usually comes from venture capital firms, often the same investors who led the previous round. Because each round comes with a new valuation for the startup, previous investors often choose to reinvest in order to ensure that their piece of the pie is still significant.Companies at this stage may also attract the interest of venture capital firms that invest in late-stage startups." },
    { heading: "Series C", description: "Companies that make it to the Series C stage of funding are doing very well and are ready to expand to new markets, acquire other businesses, or develop new products. Series C is often the last round that a company raises, although some do go on to raise Series D . ", additionalDetails: "For its Series C, startups typically raise an average of $26 million. Valuation of Series C companies often falls between $100 million and $120 million, although it’s possible for companies to be worth much more, especially with the recent explosion of “unicorn” startups.Valuation at this stage is based on hard data points, like:1. How many customers does the company have?2. How much revenue has the company generated?3. What is the company's current and projected growth rate?Series C funding typically comes from venture capital firms that invest in late-stage startups, private equity firms, banks, and even hedge funds." },
    { heading: "Series D", description: "Series D is a little more complicated than the previous funding rounds. As mentioned, many companies finish raising capital during a Series C. However, there are a few reasons a company may choose to continue on to Series D. Expansion Opportunities:", additionalDetails: " Expansion Opportunities: Before opting to go IPO, a company might discover a new opportunity for expansion and just need another boost to get there. Many companies raise Series D rounds (or beyond) to increase their value before going public. Alternatively, some companies want to stay private for longer than was once common. 2. Down Round: When a company hasn’t hit the expectations laid out after raising their Series C it's called a “down round It also refers to when a company raises money at a lower valuation than they raised in their previous round.Series D rounds are typically funded by venture capital firms. The amount raised and valuations vary widely especially because so few startups reach this stage." },
    { heading: "Series E", description: "If few companies make it to Series D, even fewer make it to a Series E. Companies that reach this point often raise for many of the reasons listed in the Series D round:They’ve failed to meet expectationsThey want to stay private longerThey need a little more help before going public", additionalDetails: "Since I have no rigid expectation from others, I am not affected psychologically when others fail to meet my expectations. But I take care to choose proper people who can meet my expectations when it is related to a work to be done or target to be achueved. I try to mix with good people who will honour their promises. But if anyone fails to fulfil me expectation or cheats me, I accept that also, as a matter of fact. In this sense I have no expectation." },
    { heading: " Crowdfunding", description: "Crowdfunding is a method of raising capital through the collective effort of friends, family, customers, and individual investors.This approach taps into the collective efforts of a large pool of individuals — primarily online via social media and crowdfunding platforms.", additionalDetails: "Crowdfunding is essentially the opposite of the mainstream approach to business finance. Traditionally, if a person wants to raise capital to start a business or launch a new product, they would need to pack up their business plan, market research, and prototypes, and then shop their idea around to a limited pool or wealthy individuals or institutions.These funding sources include:1:- Banks2:- Angel investors;3:-Venture capital firms This fundraising approach is like a funnel, with the entrepreneur and their pitch at the wide end and the audience of investors at the closed end. Fail to point that funnel at the right investor or firm at the right time, and that’s time and money lost. Crowdfunding platforms, on the other hand, turns that funnel on-end. By giving the entrepreneur a single platform to build, showcase, and share pitch resources, this approach dramatically streamlines the traditional model.Traditionally, entrepreneurs spend months sifting through their personal networks, vetting potential investors, and spending their own time and money to get in front of them.With crowdfunding, it’s much easier for entrepreneurs to get their opportunity in front of more interested parties and give them more ways to help grow the business, from investing thousands in exchange for convertible debt or equity to contributing $20 in exchange for a first-run product or other rewards. " },
    { heading: "Venture Capital", description: "Venture capital is funding that’s invested in startups and small businesses that are usually high risk, but also have the potential for exponential growth.The goal of a venture capital investment is a very high return for the venture capital firm, usually in the form of an acquisition.", additionalDetails: " Venture capital is a great option for startups that are looking to scale big — and quickly. Because the investments are fairly large, your startup has to be prepared to take that money and grow.A venture capital firm is usually run by a handful of partners who have raised a large sum of money from a group of limited partners (LPs) to invest on their behalf.The LPs are typically large institutions, like a State Teachers Retirement System or a university who are using the services of the VC to help generate big returns on their money. The partners have a window of 7 to 10 years with which to make investments, and more importantly, generate a big return. Creating a big return in such a short span of time means that VCs must invest in deals that have a giant outcome.These big outcomes not only provide great returns to the fund, they also help cover the losses of the high number of failures that high risk investing attracts" },
    { heading: "Angel Investors", description: "Angel investors are typically high net worth individuals who look to put relatively small amounts of money into startups, typically ranging from a few thousand dollars to as much as a million dollars.Angels are often one of the early-stage capital for an entrepreneur and ecosystem.", additionalDetails: "Angels are often one of the more accessible forms of early-stage capital for an entrepreneur and as such are a critical part of the equity fundraising ecosystem.The most beneficial aspect to working with an angel investor is that they can usually make an investment decision on their own. Not having to manage a partnership or corporate hierarchy of decision-making allows the angel investor to make bets that they feel comfortable with personally.Often this is what an entrepreneur needs early in their startup’s development. Angels also tend to have subject matter expertise in a particular area, often where they have made money before. This helps the entrepreneur in a couple huge ways. First, they won’t waste the entrepreneur’s time asking uninformed questions because they already know the space. Second, they tend to be well-connected in particular industries, so the value of their investment also includes the resources they can bring to help the venture in the future." },
    { heading: "Other Funding", description: "Don’t miss our guides to the full range of startup funding options, below.Federal Government Grants for Small Business: What You Need to Know Venture Capital: What It Is & Why Use It Series A, B, C, D, and E Funding: How It Works  What is Crowdfunding? Types of Crowdfunding: Donation", additionalDetails: "When it comes to financing a startup, government grants for small businesses aren’t the first thing most founders look toward. And they shouldn’t be. While it’s great to get “free money” if you can, federal grants  not easy to get. However, if your startup does qualify for a government grant for small business, then they’re potentially a great source of funding that you don’t have to pay back. " },
    // Add more sections 
  ];

  const renderSeries = (section, index) => {
    return (
      <div className='col-md-4' key={index}>
        <div className='testimonial-box'>
          <div className='row Series-info'>
            <div className='col-md-2 col-xs-2'></div>
            <div className='col-md-10 col-xs-10'>
              <h6>{section.heading}</h6>
              <p>{section.description}</p>
              {showDetails[index] && (
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <p>{section.additionalDetails}</p>
                </div>
              </div>
            </div>
          )}
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col-md-6 text-left'>
              <button onClick={() => toggleDetails(index)} style={{ padding: '5px 10px', fontSize: '16px' }} className='buttonread'>
                {showDetails[index] ? 'Hide Details' : 'Show Details'}
              </button>
            </div>
            <div className='col-md-6 text-right'>
              {/* <button style={{ padding: '6px 11px', fontSize: '14px' }} className='buttonread'>
                Apply for Fund
              </button> */}
              <button onClick={() => setShowForm(!showForm)} style={{ padding: '6px 11px', fontSize: '14px' }} className='buttonread'>
         Apply for Fund
         </button>

            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <div className='col-md-12 div-container1'>
          <div>
            <h1 style={{ textAlign: 'center' }}>
              We're <span className='building-text'>Fundraising</span> & its types-All that you need know For You
            </h1>
            <br />
            <br />
            <p style={{ textAlign: 'center' }}>
              FUNDRAISING through online platforms helps people from anywhere in the world to donate to a cause they believe in. In this blog,
              we will present a beginner’s guide to fundraising. The articles on this page represent the basic knowledge you need to get started
              with raising money for any NGO or non-profit organization.
            </p>
            <br />
            <div className='text-center'>
              <button className='btn1 fund'>
                <h4>TYPES OF FUNDING</h4>
              </button>
            </div>
          </div>
          <div></div>
        </div>

        <div className='container-fluid'>
          <Slider {...sliderSettings}>
            <div>
              <div className='container'>
                <div className='row'>
                  {sections.slice(0, 3).map((section, index) => (
                    renderSeries(section, index)
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className='container'>
                <div className='row'>
                  {sections.slice(3, 6).map((section, index) => (
                    renderSeries(section, index + 3)
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className='container'>
                <div className='row'>
                  {sections.slice(6, 9).map((section, index) => (
                    renderSeries(section, index + 6)
                  ))}
                </div>
              </div>
            </div>
          </Slider>
        </div>

        {showForm && (
  <div className="fund-application-form">
    <h3>Apply for Fund</h3>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </label>
      {/* <label>
        Purpose:
        <input
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          required
        />
      </label> */}
<label>
        Purpose:
        <input
          type="text"
          value={purpose}
          onChange={handlePurposeChange}
          onFocus={() => setOriginalPurpose(purpose)}
        />
        <button type="button" onClick={handleCancelPurpose}>Cancel</button>
      </label>

      <button type="submit">Submit</button>
    </form>
  </div>
)}




      </div>
    </>
  );
};

export default Layout()(Funding);



