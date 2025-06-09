import React, { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recaptchaToken = window.grecaptcha.getResponse();
    if (!recaptchaToken) {
      setError("Please complete the CAPTCHA.");
      return;
    }

    setError("");

    const payload = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      "g-recaptcha-response": recaptchaToken,
    });

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwZXjEDjGkwd8Mpj4lQoNxDEiCKxw3b4XHBiNqgesHKGJNF2xZPRx6C7c-FKtKN8a8q/exec", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      const text = await response.text();
      if (text === "Success") {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        window.grecaptcha.reset();
      } else {
        setError("reCAPTCHA failed or message rejected.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Failed to send message. Try again later.");
    }
  };

  return (
    <div>
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-page">

        <p>If you'd like to ask a question, commission work, or just say hello, please use the form below:</p>

        {submitted && <p className="form-success">Thank you! I'll get back to you soon.</p>}
        {error && <p className="form-error">{error}</p>}

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <div className="g-recaptcha" data-sitekey="6LdhDEErAAAAAOlvhOsW12fz8-ybQ-E0g9XvyG91"></div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;