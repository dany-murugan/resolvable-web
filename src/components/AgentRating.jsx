import React, { useState } from "react";
import classes from "./AgentRating.module.scss";

const AgentRating = (props) => {
  // For predefine value
  // const [value, setValue] = useState(0);

  const handleAddFormChange = (e) => {
    const fieldValue = e.target.value;
    // setValue(fieldValue);
    props.ratingChange(fieldValue);
  };

  return (
    <section className={classes.ratingSection}>
      <h2 className="intro-section-title">How would you rate their service?</h2>
      <form className={classes.formRating}>
        <input
          type="radio"
          name="rating"
          id="rating1"
          value="1"
          required
          onChange={handleAddFormChange}
        />
        <label htmlFor="rating1">1</label>

        <input
          type="radio"
          name="rating"
          id="rating2"
          value="2"
          required
          onChange={handleAddFormChange}
        />
        <label htmlFor="rating2">2</label>

        <input
          type="radio"
          name="rating"
          id="rating3"
          value="3"
          required
          onChange={handleAddFormChange}
        />
        <label htmlFor="rating3">3</label>

        <input
          type="radio"
          name="rating"
          id="rating4"
          value="4"
          required
          onChange={handleAddFormChange}
        />
        <label htmlFor="rating4">4</label>

        <input
          type="radio"
          name="rating"
          id="rating5"
          value="5"
          required
          onChange={handleAddFormChange}
        />
        <label htmlFor="rating5">5</label>
      </form>
    </section>
  );
};

export default AgentRating;
