import React from "react";

const ThankMsg = (props) => {
  return (
    <section>
      <h2 className="intro-section-title-thx">
        Thank you from {props.searchAgent[0].firstName}!
      </h2>
    </section>
  );
};

export default ThankMsg;
