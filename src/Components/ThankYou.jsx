// ThankYou.js
import React, { useEffect } from 'react';
import "./ThankYou.css";
import thankyou from '../assets/thank-you.png';

const ThankYou = () => {

  useEffect(() => {
    
    const redirectTimeout = setTimeout(() => {
      window.open('https://port-folio-puce-zeta.vercel.app/');
    }, 5000);

    
    return () => clearTimeout(redirectTimeout);
  });
  return (
    <div className='thankyou'>
      <h2>Thank you for your message!</h2>
      <img src={thankyou} alt="thank-you" className='image'/>
      <p>We appreciate your contact. Will get back to you shortly.
      <br/>Have a great day!❤️</p>
    </div>
  );
};

export default ThankYou;
