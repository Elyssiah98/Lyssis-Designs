// src/Pages/FAQs.jsx

import React from "react";
import FAQData from "./Data/FAQData";
import FAQCategory from "./FAQComponents/FAQCategory";
import "./FAQs.css";

export default function FAQs() {
  return (
    <div className="faq-page">
      <h1 className="faqs-title">Frequently Asked Questions</h1>
      {FAQData.map((section, idx) => (
        <FAQCategory
          key={idx}
          category={section.category}
          questions={section.questions}
        />
      ))}
    </div>
  );
}