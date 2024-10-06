import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link if you're using React Router
import '../styles/Pricing.css';
import PlanComparison from '../components/PlanComparison';

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="pricing-container">
      <h1 className="pricing-header">Pricing</h1>
      <p className="subheading">Choose the best plan for your AI-generated testimonials, tailored to suit your business needs.</p>

      <div className="switch-wrapper">
        <p>Pay monthly</p>
        <label className="switch">
          <input type="checkbox" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
          <span className="slider round"></span>
        </label>
        <div className="yearly-option">
          <p>Pay yearly</p>
          <p className="save-text">Save up to 30%</p>
        </div>
      </div>

      <div className="pricing-cards">
        <div className="card starter">
          <Link to="/signup">
            <h3>Starter</h3>
            <ul>
              <li>100 AI-generated testimonials</li>
              <li>Basic sentiment analysis</li>
              <li>5 Custom templates</li>
              <li>Email support</li>
            </ul>
            <div className="price">
              <div className="original-price">
                <del>${isYearly ? '948' : '79'}</del>
                <span className="price-period">{isYearly ? '/year' : '/month'}</span>
              </div>
              <div className="current-price">
                ${isYearly ? '708' : '59'}
                <span className="price-period">{isYearly ? '/year' : '/month'}</span>
              </div>
            </div>
            <a href="/signup" className="btn btn-small">Get started</a>
          </Link>
        </div>

        <div className="card highlight professional">
          <Link to="/signup">
            <h3>Professional</h3>
            <span className="badge">Popular</span>
            <ul>
              <li>500 AI-generated testimonials</li>
              <li>Advanced sentiment analysis</li>
              <li>20 Custom templates</li>
              <li>Email & chat support</li>
            </ul>
            <div className="price">
              <div className="original-price">
                <del className='farenDin'>${isYearly ? '1188' : '99'}</del>
                <span className="price-period">{isYearly ? '/year' : '/month'}</span>
              </div>
              <div className="current-price">
                ${isYearly ? '1020' : '85'}
                <span className="price-period">{isYearly ? '/year' : '/month'}</span>
              </div>
            </div>
            <a href="/signup" className="btn">Get started</a>
          </Link>
        </div>

        <div className="card business">
          <Link to="/signup">
            <h3>Business</h3>
            <ul>
              <li>Unlimited AI-generated testimonials</li>
              <li>Comprehensive sentiment analysis</li>
              <li>Unlimited custom templates</li>
              <li>24/7 Priority support</li>
            </ul>
            <div className="price">
              <div className="original-price">
                <del>${isYearly ? '3588' : '299'}</del>
                <span className="price-period">{isYearly ? '/year' : '/month'}</span>
              </div>
              <div className="current-price">
                ${isYearly ? '2388' : '199'}
                <span className="price-period">{isYearly ? '/year' : '/month'}</span>
              </div>
            </div>
            <a href="/signup" className="btn btn-small">Get started</a>
          </Link>
        </div>
      </div>

      <PlanComparison />

      <p className="subheading">We're in public beta 🎉 Join early! And get your subscription at a <span style={{color: '#6c5dd3'}}>30% discount</span> for a lifetime!</p>
    </div>
  );
}

export default Pricing;