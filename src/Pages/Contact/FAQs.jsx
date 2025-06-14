import React, { useState } from "react";
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
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      // close it
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      // open it (add to array)
      setOpenIndexes([...openIndexes, index]);
    }
  };

 return (
    <div>
      <h1 className="faqs-title">Frequently Asked Questions</h1>
      <div className="faq-page">
        <div className="faq-list">
          {faqList.map(({ question, answer }, i) => {
            const isOpen = openIndexes.includes(i);
            return (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => toggleFAQ(i)}
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
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQs;