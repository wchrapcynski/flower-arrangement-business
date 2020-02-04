import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className='homepage'>
      <div className='homepage-description-box'>
        <img src={require("../images/flowers4.jpg")} alt="flowers"/>
        <div className='homepage-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
          aliquam metus. Nam blandit, quam ac luctus pharetra, sem justo
          suscipit mi, vel ornare ex arcu a diam. Nullam eu tincidunt nisi, nec
          egestas lectus. Integer a elit nec arcu mollis laoreet.
        </div>
      </div>
    </div>
  );
}

export default HomePage;
