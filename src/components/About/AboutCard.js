import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Ruethaiboon Srithai </span>
            from <span className="purple"> Bangkok, Thailand.</span>
            <br />I am a Career Switcher pursuing an opportunity to work as a Junior Software Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Translating
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Studying
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Study! It's fun!"{" "}
          </p>
          <footer className="blockquote-footer">Ruethaiboon</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
