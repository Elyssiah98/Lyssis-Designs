// src/Components/FAQ/FAQItem.jsx

import React from "react";

export default function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="faq-item">
      <button
        className="faq-question"
        aria-expanded={isOpen}
        onClick={onClick}
      >
        {question}
        <span className={`faq-icon ${isOpen ? "open" : ""}`}>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}