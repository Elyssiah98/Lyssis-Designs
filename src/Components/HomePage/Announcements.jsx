import React from 'react';
import './Announcements.css';

const Announcements = () => {
  const announcements = [
    {
      title: 'New Workshop Available',
      date: '2025-05-20',
      content: 'Join our latest workshop on creative design techniques.',
    },
    {
      title: 'Website Update',
      date: '2025-05-15',
      content: 'We have updated our portfolio section with new projects.',
    },
  ];

  return (
    <section className="announcements-section">
      <h2>Announcements</h2>
      <ul>
        {announcements.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p><em>{item.date}</em></p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Announcements;