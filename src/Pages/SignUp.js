import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUp.css';
import Portrait1 from '../Assets/images/portrait1.jpeg'
import Portrait2 from '../Assets/images/portrait2.jpeg'
import Portrait3 from '../Assets/images/portrait3.jpeg'
import Portrait5 from '../Assets/images/portrait5.jpeg'
import Icon1 from '../Assets/images/icon1.png'


const SignUp = () => {
  useEffect(() => {
    // Add a class to the body when the SignUp component is mounted´´´
    document.body.classList.add('signup-page');

    // Clean up the class when the component is unmounted
    return () => {
      document.body.classList.remove('signup-page');
    };
  }, []);

  return (
    <div className="signup-container">
      <div className="form-section">
        <div className="back-link-container">
          <Link to="/" className="back-link">← Back to home page</Link>
        </div>
        <h1>Sign Up</h1>
        <p>Already have an account? <Link to="/signin">Sign in here!</Link></p>
        <button className="google-signup">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px" style={{ marginRight: '10px' }}>
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
          </svg>
          Sign up with Google
        </button>
        <div className="or-divider">
          <span>or</span>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter a user name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter email address" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter password" />
          </div>
          <button type="submit" className="primary-button">Sign up</button>
        </form>
        <p className="terms">By signing up, you agree to our <Link to="/terms">Terms of Service</Link> and acknowledge our <Link to="/privacy">Privacy Policy</Link>.</p>
      </div>
      <div className="promo-section">
        <div className="logo-container" style={{ display: 'flex', alignItems: 'center' }}>
          <a href="/" className="logo-link" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="logo-text">Repute</div>
            <img src={Icon1} alt="Star Icon" className="star-icon" style={{ width: '24px', height: '24px', marginLeft: '5px' }} />
          </a>
          </div>
        <div className="marquee-bottom">
          <div className="marquee-content-bottom"> REPUTE REPUTE REPUTE Sign Up For Free Now! REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE REPUTE Sign Up For Free Now! REPUTE REPUTE</div>
        </div>
        <h2>The #1 AI-Powered Testimonial Tool</h2>
        <p>Create authentic testimonials in seconds and elevate your brand's reputation.</p>
        <div className="avatar-group">
          <img src={Portrait1} alt="User Avatar" />
          <img src={Portrait2} alt="User Avatar 2" />  
          <img src={Portrait3} alt="User Avatar 3" />  
          <img src={Portrait5} alt="User Avatar 5" />  
        </div>
      </div>
    </div>
  );
};

export default SignUp;
