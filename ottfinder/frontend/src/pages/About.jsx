import React from "react";
import "./style/About.css";

const About = () => {
  return (
    <div className = "background-img">
    <div className="about-container">
      

      <main>
        <section>
          <h2>Welcome to Strovie</h2>
          <p>
            <strong>Strovie</strong> is a movie and web series discovery website
            that brings trending content and hidden gems from various platforms
            directly to you.
          </p>

          <p>
            <strong>So, what does it do?</strong>
          </p>

          <p>Let me explain:</p>

          <ul>
            <li>
              You get all the information about movies and web series, including
              ratings, genres, and other essential details.
            </li>
            <li>You can view trailers of the movies or web series.</li>
            <li>
              The website also shows you the platforms where the content is
              available for streaming.
            </li>
            <li>
              The unique feature: With a simple click on the "Generate as Book"
              button, you can read the movie or web series content as a book.
            </li>
          </ul>

          <p>
            <strong>In short, you can:</strong>
          </p>

          <ul>
            <li>Discover movie and web series details</li>
            <li>Watch trailers from Youtube</li>
            <li>Find out where to stream them</li>
            <li>Read the content like a small book.</li>
          </ul>
        </section>

        <section>
          <h2>Why I Built This</h2>
          <p>
            I created Strovie as a solo developer because whenever i wanted to
            search for any content to stream i had to search it first on google
            and then check on what platform is the content available so the goal
            was to make content exploration easier and fun. I use free APIs to
            fetch top movies and shows and present them beautifully through
            carousels and search filters.
          </p>
        </section>

        <section>
          <h2>What's Next</h2>
          <p>
            I plan to expand Strovie and also add audiobook for you guys with
            reviews, trailers, and more curated lists, while keeping the
            experience smooth and ad-friendly.
          </p>
        </section>
      </main>
    </div>
    </div>
  );
};

export default About;
