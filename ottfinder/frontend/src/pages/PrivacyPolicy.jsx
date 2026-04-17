import React from 'react';
import "./style/Policy.css";
import { Link } from 'react-router';
const PrivacyPolicy = () => {
  return (
    <div className = "background-picture">
    <div className="policy-container">
      <h1>Privacy Policy</h1>
      <p>Effective Date: July 24, 2025</p>

      <p>Strovie is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website.</p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Personal Information (like name ,email only  if provided via contact form) Info will be deleted Later </li>
        <li>Non-personal data like browser type, device type, and IP address</li>
        <li>Cookies and usage data for analytics and performance improvement</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to inquiries submitted through our contact form</li>
        <li>To monitor and analyze usage for website improvement</li>
        <li>To serve relevant ads using Google AdSense</li>
      </ul>

      <h2>Google AdSense</h2>
      <p>We use third-party advertising services like Google AdSense. These services may use cookies to personalize ads. You can opt out of personalized advertising by visiting Google’s Ad Settings.</p>

      <h2>Your Rights</h2>
      <p>You may contact us to request access, correction, or deletion of your personal data.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us via the <Link style = {{color: "skyblue"}} to = "/contact"> contact page.</Link> </p>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
