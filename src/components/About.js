import React from "react";
import Links from "./Links";

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditional rendering of the <p> tag */}
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* Add your <Links /> component here */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
