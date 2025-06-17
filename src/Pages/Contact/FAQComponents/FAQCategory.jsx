// src/Components/FAQ/FAQCategory.jsx

import React, { useState } from "react";
import FAQItem from "./FAQItem";

export default function FAQCategory({ category, questions }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-category">
      <h2 className="faq-category-title">{category}</h2>
      {questions.map((q, index) => (
        <FAQItem
          key={index}
          question={q.question}
          answer={q.answer}
          isOpen={openIndex === index}
          onClick={() => toggle(index)}
        />
      ))}
    </div>
  );
}