import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="overlay"></div>
        <div className="content">
          <p className="title">QUEENS CRICKET CLUB</p>
          <p className="intro">Introducing Cricket to Queen's University and Kingston Community</p>
        </div>
      </div>
      <div className="main">
        <div className="about">
          <h3>About Us</h3>
          <p>
            We are a student run cricket club. Our goal is to connect like-minded individuals who share a love or cricket
            and play competitive and friendly matches and tournaments. We promote team building and encourage healthy competition.
            <p>
              Lets unite, empower, and elevate our cricket game together!
            </p>
            <p>
              To stay tuned for updates, events, and the latest new in the world of cricket follow us on instagram at
              <a href="https://www.instagram.com/queens_cricket"> @queens_cricket</a>
              !
            </p>
          </p>
        </div>
      </div>

    </>
  );
};

export default Home;