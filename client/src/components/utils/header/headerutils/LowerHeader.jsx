import React, { useState } from "react";
import logo from "/src/assets/logo.png";
import { FaSearch } from "react-icons/fa";

const LowerHeader = ({ links, setLinks }) => {
  console.log();
  const [selected, setIsSelected] = useState(null);

  const getId = (id) => {
    // get the id
    setIsSelected(id);
  };

  return (
    <div className="lowerHeader">
      <section className="left-lower-header">
        <img className="logo" src={logo} alt="Logo" />
        <h3>EcoRise Global Initiative</h3>
      </section>



      <section className="middle-lower-header">
        {links.map((link) => {
          return (
            <div
              className={
                selected === link.id
                  ? "tracker-wrapper active"
                  : `tracker-wrapper`
              }
              key={link.id}
            >
              <span onClick={() => getId(link.id)}>{link.linkName}</span>
              <div className="tracker"></div>
            </div>
          );
        })}
      </section>
      <section className="right-lower-header">
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <button className="donate-btn">Donate Now</button>
        </div>
      </section>
    </div>
  );
};

export default LowerHeader;
