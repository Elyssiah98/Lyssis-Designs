import React from "react";
import "./FAQs.css";

const faqList = [
  {
    question: "How can I contact you?",
    answer: "You can use the Contact page form or email me directly at your_email@example.com.",
  },
  {
    question: "Do you accept commissions?",
    answer: "Yes! Please reach out through the Contact page to discuss your project.",
  },
  {
    question: "What materials do you use?",
    answer: "I prefer natural and traditional materials, but it depends on the project.",
  },
  {
    question: "How long does a project usually take?",
    answer: "It varies by complexity, but typically between 2 to 6 weeks.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, I ship worldwide with reliable carriers.",
  },
];

function FAQs() {
  return (
    <div>
      <h1 className="faqs-title">Frequently Asked Questions</h1>
      <div className="faq-page">
        <div className="faq-list">
          {faqList.map(({ question, answer }, i) => (
            <div key={i} className="faq-item">
              <h3>{question}</h3>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;