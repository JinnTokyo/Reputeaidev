import React from "react";
import '../styles/TestimonialProfile.css';
import Profile1Img from '../Assets/images/businessportrait11.png'
import Profile2Img from '../Assets/images/businessportrait4.png'
import Profile3Img from '../Assets/images/businessportrait6.png'



function TestimonialProfile() {
  return (
    <div className="CustomersSection">
      <div className="CustomersSectionDescriptionContainer">
        <h2 className="CustomersSectionTitle" >What Our Customers Say</h2>
        <p>See how our AI-generated testimonials have helped businesses like yours build trust and drive conversions.</p>
      </div>


      <div className="TestimonialContainer">

        <div className="LeftTestimonialContainer">
          <div className="ImageContainer">
          <img className="Profile1Img" src={Profile1Img} />
          </div>
        </div>
        <div className="RightTestimonialContainer">
          <div className="RightUpTestimonialContainer">
            <div className="BioContainer">
              <h2 className="Bio">Jane Doe, CEO of Alpha Corp Since 2013 </h2>
              <p className="SubBio">Driving Innovation in the Tech Industry </p>
            <div className="Line"></div>
            </div>
          </div>
          <div className="RightDownTestimonialContainer">
            <h2 className="Quotes">"Revolutionizing Our Business from the Ground Up"</h2>
            <div className="ReviewContainer">
              <p className="ReviewCustomer">Their AI solutions exceeded our expectations. We've seen a 50% sales increase in just one quarter and significantly improved efficiency. The personalized support and tech expertise are truly unmatched.
              </p>
            </div>
          </div>


        </div>
      </div>

      <div className="TestimonialContainer">
        <div className="LeftTestimonialContainer">
          <div className="ImageContainer">
            <img className="Profile2Img" src={Profile2Img} />

          </div>
        </div>
        <div className="RightTestimonialContainer">
          <div className="RightUpTestimonialContainer">
            <div className="BioContainer">
              <h2 className="Bio">John Smith, Founder & CEO of InnovateX Solutions</h2>
              <p className="SubBio">Pioneering Digital Transformation Since 2015</p>
              <div className="Line"></div>
            </div>
          </div>
          <div className="RightDownTestimonialContainer">
            <h2 className="Quotes">"The Boost We Needed to Accelerate Our Growth..."</h2>
            <div className="ReviewContainer">
              <p>Their AI helped us increase operational efficiency by 40% and improve customer engagement. The personalized approach made all the difference, giving us exactly what we needed to scale.</p>

            </div>
          </div>


        </div>
      </div>

      <div className="TestimonialContainer">
        <div className="LeftTestimonialContainer">
          <div className="ImageContainer">
          <img className="Profile2Img" src={Profile3Img} />

          </div>
        </div>
        <div className="RightTestimonialContainer">
          <div className="RightUpTestimonialContainer">
            <div className="BioContainer">
              <h2 className="Bio">Meet Sarah Lee, CMO at Horizon Enterprises</h2>
              <p className="SubBio">Leading Marketing Innovation and Strategy</p>
              <div className="Line"></div>
            </div>
          </div>
          <div className="RightDownTestimonialContainer">
            <h2 className="Quotes">"Unlocking New Heights with Advanced AI Solutions" </h2>
            <div className="ReviewContainer">
            <p>The AI-driven insights boosted our campaign ROI by 60%. Their team’s expertise and hands-on 
              support have been crucial to delivering better results for our clients.</p>

            </div>
          </div>


        </div>
      </div>
    </div>
  );

}

export default TestimonialProfile;




