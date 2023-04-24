import React, { useState, useContext } from "react";
import Context from "../Context";
import classes from "./AgentComment.module.scss";

const AgentComment = (props) => {
  const [comment, setComment] = useState("");
  const [txtValid, settxtValid] = useState(false);
  const { searchAgent } = useContext(Context);

  const submitCTA = (e) => {
    e.preventDefault();
    if (!comment) {
      settxtValid(true);
    } else {
      settxtValid(false);
      //Send to Parent
      props.commentDone(comment);
      props.submitDone(true);
    }
  };

  return (
    <section className={classes.commentSection}>
      <h2 className="intro-section-title">Thanks for your rating!</h2>
      <form className={classes.formComment} onSubmit={(e) => submitCTA(e)}>
        <textarea
          id="agentComment"
          name="comment"
          placeholder={`Would you like to leave a note for ${searchAgent[0].firstName}?`}
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>

        {txtValid && (
          <p className={classes.errorMsg}>Please insert a comment !</p>
        )}
        <button className={classes.btnSubmit}>Submit</button>
      </form>
    </section>
  );
};

export default AgentComment;
