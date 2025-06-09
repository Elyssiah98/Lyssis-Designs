import React from "react";
import "./Legal.css";

function Privacy() {
  return (
    <div>
      <h1 className="legal-title">Privacy Policy</h1>
      <div className="legal-page">
        <p>Your privacy is important. This policy explains how your information is collected and used.</p>

        <h2>1. Data Collection</h2>
        <p>We collect personal info (name, email, etc.) only when you submit a form or contact us.</p>

        <h2>2. Use of Information</h2>
        <p>Information is used solely for responding to enquiries or fulfilling services like commissions.</p>

        <h2>3. Cookies</h2>
        <p>This site may use cookies to enhance user experience. You can disable them in your browser.</p>

        <h2>4. Third-Party Services</h2>
        <p>Data may be shared with trusted third-party services (e.g., payment processors or Google Forms).</p>

        <h2>5. Your Rights</h2>
        <p>You can request to access, modify, or delete your data at any time.</p>
      </div>
    </div>
  );
}

export default Privacy;