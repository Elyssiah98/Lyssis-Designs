import React from "react";
import { Link } from "react-router-dom";
import "./Legal.css";

function Terms() {
  return (
    <div>
      <h1 className="legal-title">Terms & Conditions</h1>
      <div className="legal-page">
        <p>Last updated: May 2025</p>

        <section>
          <h2>1. Overview</h2>
          <p>
            By using this website or commissioning any services from Lyssi's Designs, you agree to the following terms and conditions. These may be updated periodically, so please review them regularly.
          </p>
        </section>

        <section>
          <h2>2. Commissions</h2>
          <ul>
            <li>A 50% deposit is required before any work begins on a custom project.</li>
            <li>Final payment must be made before delivery or shipping.</li>
            <li>Custom pieces are non-refundable once materials have been purchased or work has begun.</li>
            <li>Completion times vary and will be discussed individually.</li>
          </ul>
        </section>

        <section>
          <h2>3. Digital Art & Illustrations</h2>
          <ul>
            <li>Commissioned artwork is for personal use only unless otherwise agreed in writing.</li>
            <li>Licensing for commercial use is available at additional cost.</li>
            <li>I reserve the right to display commissioned work in my portfolio unless otherwise requested.</li>
          </ul>
        </section>

        <section>
          <h2>4. Performances</h2>
          <ul>
            <li>Performance bookings require a deposit and signed agreement confirming date, location, and technical needs.</li>
            <li>Cancellations within 14 days of the event are non-refundable.</li>
            <li>Outdoor performances depend on weather and rigging conditions; safety comes first.</li>
          </ul>
        </section>

        <section>
          <h2>5. Shipping & Returns</h2>
          <ul>
            <li>All physical items are packaged with care and shipped using a reliable service with tracking where possible.</li>
            <li>Custom items cannot be returned unless they arrive damaged or incorrect.</li>
            <li>Please contact me within 7 days of receiving your item if there is an issue.</li>
          </ul>
        </section>

        <section>
          <h2>6. Website Use</h2>
          <ul>
            <li>All content on this site is the intellectual property of Lyssi’s Designs unless otherwise stated.</li>
            <li>You may not reproduce or use content without permission.</li>
            <li>Use of this site constitutes agreement to these terms.</li>
          </ul>
        </section>

        <section>
          <h2>7. Privacy</h2>
          <p>
            Personal data provided through the contact form or purchases is kept confidential and will never be shared without consent. Refer to the separate Privacy Policy for more details.
          </p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>
            If you have questions about these terms, please get in touch through the <Link to="/Contact">Contact page</Link>.
          </p>
        </section>

        <div className="legal-page">
          <h1>Terms and Conditions</h1>
          <p>By accessing and using this website, you agree to the following terms and conditions.</p>

          <h2>1. Use of Site</h2>
          <p>You agree to use this website only for lawful purposes and in a way that does not infringe others' rights.</p>

          <h2>2. Intellectual Property</h2>
          <p>All content is owned by Lyssi's Designs and may not be reproduced without permission.</p>

          <h2>3. Commissions</h2>
          <p>Commissioned work is agreed upon via email or contract. Payment terms and delivery times vary per project.</p>

          <h2>4. Liability</h2>
          <p>Lyssi's Designs is not liable for any damages from the use of this site.</p>

          <h2>5. Modifications</h2>
          <p>Terms may be updated without notice. Continued use indicates acceptance of any changes.</p>
        </div>

      </div>
    </div>
  );
}

export default Terms;