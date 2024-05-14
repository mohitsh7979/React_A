import React from "react";
import "./About.css";
import product from "./Product";
import Pro from "./Pro";

function About(pros) {
  return (
    <>
      <div className="about-section">
        <h1>My name is {pros.data}</h1>
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      {product.map((item) => (
        
        <Pro name = {item.name} post = {item.post} description = {item.description} email = {item.email} image = {item.image} />

      ))}
    </>
  );
}

export default About;
