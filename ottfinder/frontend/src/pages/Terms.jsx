import React from 'react';
import "./style/Policy.css";

const Terms = () => {
  return (
    <div className = "background-picture">
    <div className="policy-container">
      <h1>Terms and Conditions</h1>
      <p>Welcome to Strovie! By accessing or using our website, you agree to the following terms and conditions.</p>

      <h2>Use of Content</h2>
      <p>The content on this site is for informational purposes only. Reproduction or redistribution is prohibited without our consent.</p>

      <h2>User Conduct</h2>
      <ul>
        <li>Do not use the site for illegal activities</li>
        <li>Do not attempt to harm, hack, or disrupt the service</li>
        <li>Respect copyright laws when using information from this website</li>
      </ul>

      <h2>Links to Other Sites</h2>
      <p>Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.</p>

      <h2>Limitation of Liability</h2>
      <p>We are not liable for any loss or damage resulting from the use of our website.</p>

      <h2>Changes to Terms</h2>
      <p>We reserve the right to modify these terms at any time. Continued use of the site means you accept those changes.</p>
    </div>
    </div>
  );
  
};

export default Terms;
