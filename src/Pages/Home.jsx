import React from "react";
import "./Home.css";

function Home() {
  return (
    <main className="content">
    <div className="top-banner"></div>

    <section className="image-carousel"></section>

    <section className="blog-preview">
      <h2>Latest Blog Posts</h2>
      <article>
        <h3><a href="#">Making a Leotard</a></h3>
        <p>Behind the design choices and construction steps...</p>
      </article>
    </section>
    <section className="announcements">
      <h2>Announcements</h2>
      <button>hey</button>
    </section>
  </main>
  );
}

export default Home;